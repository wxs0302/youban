//雪碧模式压缩
fis.match('::packager', {
	spriter: fis.plugin('csssprites'),

	  postpackager: fis.plugin('loader')
	// 全部压缩
	//应用文件压缩
//	postpackager: fis.plugin('loader', {
//		allInOne: true
//	}),

});

//less
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});

 

//md5
fis.match('*.{js,css,png}', {
	useHash: true
});
//禁用绝对路径
fis.hook('relative');
fis.match('**', {
		relative: true
	})
	//压缩js
//fis.match('*.js', {
//	optimizer: fis.plugin('uglify-js'),
////		packTo: '/js/aio.js'   
//	//  全部压缩
//});
//压缩css
fis.match('*.css', {
	useSprite: true,
	optimizer: fis.plugin('clean-css'),
});
//压缩png
fis.match('*.png', {
	optimizer: fis.plugin('png-compressor'),
});