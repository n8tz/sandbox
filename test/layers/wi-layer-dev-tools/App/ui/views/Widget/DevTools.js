/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
import React      from "react";
import superagent from "superagent";

export default class DevTools extends React.Component {
	static defaultWindow = {
		"size"    : { "width": 200, "height": 120 },
		"position": { "x": 0, "y": 0 }
	}
	doReboot             = () => {
		superagent.get("http://localhost:9090/kill").then()
	}
	doRestore            = () => {
		superagent.get("http://localhost:9090/dbRestore").then(req => console.log(req.data))
	}
	goDev                = () => {
		superagent.get("http://localhost:9090/switch?targetMode=dev").then()
	}
	goProd               = () => {
		superagent.get("http://localhost:9090/switch?targetMode=prod").then()
	}
	
	render() {
		return (
			<div>
				<div onClick={this.doReboot}>kill App</div>
				<div onClick={this.doRestore}>db restore</div>
				<div onClick={this.goDev}>Dev mode</div>
				<div onClick={this.goProd}>Prod mode</div>
			</div>
		);
	}
	
};

