const video = document.getElementById("video");
if (video) {
	const tag = document.createElement("script");
	tag.src = "//www.youtube.com/player_api";
	const firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("video", {
		events: {
			onReady: iframeModal,
		},
	});
}

function iframeModal() {
	const container = document.querySelector(".embed-container");
	const thumb = document.querySelector(".video_thumb");
	const close = document.querySelector(".lines");

	thumb.addEventListener("click", () => {
		const clicked = container.classList.contains("clicked");

		if (!clicked) {
			container.classList.add("clicked");
			thumb.classList.add("overlay");
			close.classList.add("active");
			player.playVideo();
		}
	});

	close.addEventListener("click", () => {
		const active = close.classList.contains("active");

		if (active) {
			container.classList.remove("clicked");
			thumb.classList.remove("overlay");
			close.classList.remove("active");
			player.pauseVideo();
		}
	});
}

window.onload = () => {
	iframeModal();
};
