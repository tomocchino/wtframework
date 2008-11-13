(function(){

	var id = '__wtframework_bar__';
	var bar = document.getElementById(id);
	var remove = function(){ document.body.removeChild(bar); };
	if (bar){ remove(); return; }

	var found = [];
	var format = function(name, version){
		return '<span style="color:#9cf; font-weight:bold;">' + name + '</span>: ' + version;
	};

	if (window.base2) found.push(format('Base2', base2.version));
	if (window.dojo) found.push(format('Dojo', dojo.version));
	if (window.jQuery) found.push(format('jQuery', jQuery.fn.jquery));
	if (window.MochiKit) found.push(format('MochiKit', MochiKit.MochiKit.VERSION));
	if (window.MooTools) found.push(format('MooTools', MooTools.version));
	if (window.Prototype) found.push(format('Prototype', Prototype.Version)); 
	if (window.Scriptaculous) found.push(format('Script.aculo.us', Scriptaculous.Version));
	if (window.YAHOO) found.push(format('Yahoo UI', YAHOO.VERSION));
	if (!found.length) found.push('No major framework found.');

	var props = {
		id: id,
		onclick: remove,
		innerHTML: found.join('<br />')
	};

	var styles = {
		background: '#111',
		color: "#eee",
		filter: "alpha(opacity=90)",
		opacity: 0.9,
		top: "15px",
		right: "15px",
		position: "fixed",
		padding: "7px 15px",
		border: "solid 3px #eee",
		textAlign: "left",
		font: "12px Lucida Grande, Helvetica, Tahoma",
		WebkitBoxShadow: "0px 1px 8px rgba(0,0,0,0.8)",
		MozBoxShadow: "0px 5px 10px #000",
		textShadow: '2px 2px 0px #000',
		cursor: 'pointer',
		zIndex: 32767
	};

	bar = document.createElement('div');
	for (var prop in props) bar[prop] = props[prop];
	for (var style in styles) bar.style[style] = styles[style];
	document.body.appendChild(bar);

})();
