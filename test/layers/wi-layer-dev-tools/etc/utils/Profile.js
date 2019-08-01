const wpi      = require('webpack-inherit'),
      program  = require('commander'),
      express  = require("express"),
      fs       = require('fs'),
      path     = require('path'),
      fkill    = require('fkill'),
      rimraf   = require('rimraf'),
      chokidar = require('chokidar'),
      exec     = require('child_process').exec;

function getConfigKey( config, key ) {
	for ( let i = 0; i < config.allCfg.length; i++ )
		if ( config.allCfg[i][key] )
			return config.allCfg[i][key];
};

module.exports = function Profile( profileId ) {
	let config   = wpi.getConfig(profileId),
	    commands = getConfigKey(config, "commands"),
	    logs     = {},
	    watchers = {},
	    running  = {};
	return {
		raw: config,
		start() {
			if ( !commands )
				return console.error('No commands in this profile', profileId);
			
			for ( let cmdId in commands )
				if ( commands.hasOwnProperty(cmdId) ) {
					logs[cmdId] = logs[cmdId] || { stdout: "", stderr: "" };
					this.run(cmdId)
				}
		},
		cmdLog( cmdId, text ) {
			logs[cmdId].stdout += text + "\n";
			process.stdout.write(text + "\n");
		},
		cmdErr( cmdId, text ) {
			text = "\x1b[31m" + text + "\x1b[0m\n";
			logs[cmdId].stdout += text;
			logs[cmdId].stderr += text;
			process.stdout.write(text);
		},
		stop() {
			return Promise.all(Object.keys(commands).map(id => this.kill(id)));
		},
		kill( cmdId ) {
			let cmd  = running[cmdId],
			    task = commands[cmdId];
			//this.cmdLog(cmdId, 'Killing ' + ':' + profileId + '::' + cmdId);
			console.warn("Killing " + ':' + profileId + '::' + cmdId);
			
			return cmd && fkill(cmd.pid, { tree: true, force: true, silent: true })
				.then(
					logs => {
						running[cmdId] = null;
					}
				)
		},
		run( cmdId, cleared, watched ) {
			let cmd  = running[cmdId],
			    task = commands[cmdId];
			
			if ( cmd ) {
				return this.kill(cmdId).then(e => this.run(cmdId));
			}
			
			if ( !cleared && task.clearBefore ) {
				console.warn("Clear before ", task.clearBefore);
				return rimraf(task.clearBefore, ( err, val ) => this.run(cmdId, true));
			}
			
			if ( !watched && task.watch ) {
				watchers[cmdId] && watchers[cmdId].close();
				return watchers[cmdId] = chokidar
					.watch(task.watch, { ignored: /(^|[\/\\])\../ })
					.on('all', ( event, path ) => {
						if ( event === 'add' ) {
							console.warn(cmdId + ": '" + task.watch + "' has been updated restarting...");
							this.run(cmdId, true, true);
						}
					});
				
			}
			this.cmdLog(cmdId, 'Starting ' + ':' + profileId + '::' + cmdId);
			
			running[cmdId] = cmd = exec(
				task.run,
				{
					stdio: 'inherit',
					env  : {
						...process.env,
						'__WPI_VARS_OVERRIDE__': task.vars && JSON.stringify(task.vars),
						'__WPI_PROFILE__'      : undefined
					}
				},
				( err ) => {
					console.warn(cmdId + ": '" + task.watch + "' has been killed ...");
					
					this.cmdLog(cmdId, "Process ended");
					if ( running[cmdId] && task.forever ) {
						console.warn(cmdId + ": '" + task.watch + "' restart ...");
						setTimeout(tm => this.run(cmdId, true, true), 1000);
					}
					running[cmdId] = null;
				}
			);
			
			cmd.stdout.on('data', txt => (this.cmdLog(cmdId, txt.toString())))
			cmd.stderr.on('data', txt => (this.cmdErr(cmdId, txt.toString())))
		}
	}
}