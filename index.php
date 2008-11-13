<? require_once('jsmin-1.1.1.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>wtframework!?</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<link rel="stylesheet" type="text/css" media="screen" charset="utf-8" href="style.css" />
</head>
<body>
	<a class="button" href="javascript:<?= rawurlencode(JSMin::minify(file_get_contents('wtframework.js'))) ?>">wtframework!?</a>
	<p>drag button to your bookmarks bar... <a class="link" href="wtframework.js">source</a></p>
</body>
</html>
