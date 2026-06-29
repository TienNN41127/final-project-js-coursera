function upDate(previewPic){
	console.log(previewPic.alt, previewPic.src);
	document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
	document.getElementById('image').textContent = previewPic.alt;
}

function unDo(){
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').textContent = "Hover over an image below to display here.";
}

function setupGallery(){
	console.log("setupGallery triggered - page loaded");

	var previewImages = document.getElementsByClassName('preview');

	for(var i = 0; i < previewImages.length; i++){
		previewImages[i].setAttribute('tabindex', '0');
	}
}
