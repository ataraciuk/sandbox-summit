$(function(){
	firstDoesntExist(1);
});

var firstDoesntExist = function(nextToTry) {
	//change folder based on where you want videos
	//also, important: goes 1,2,3, AND NOT 01,02,03
	$.ajax('videos/video_test-'+nextToTry+'.mp4', {
		complete: function(jqXHR, status) {
			if(status == 'error') {
				playVideos(nextToTry);
			} else {
				firstDoesntExist(nextToTry+1);	
			}
		}
	});
}

var playVideos = function(last) {
	//here it means you found the first number that doesn't exisit as video, which is 'last' in this function
	// so, you will have to play from last-1 to last-4
	console.log(last);
}