const video = document.getElementById("video");

if (video) {
	const tag = document.createElement("script");
	tag.src = "https://www.youtube.com/player_api";
	const firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

const title = "CMS unique module text title";
const url = "https://www.youtube.com/watch?v=kZu3AYNjmjI";
const urlId = url.split("=")[1];
// console.log(url.split("=")[1]);

let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("video", {
		title: title,
		videoId: urlId,
		events: {
			onReady: iframeModal,
		},
	});
}

function iframeModal() {
	const container = document.querySelector(".embed-container");
	const thumb = document.querySelector(".video_thumb");
	const close = document.querySelector(".lines");

	// const title = player.getVideoData().title;
	// console.log(player.getVideoData());
	// console.log(title);

	const hqdefault = `<img src="https://img.youtube.com/vi/${urlId}/hqdefault.jpg" alt="${title}" />`;

	if (thumb) {
		thumb.insertAdjacentHTML("afterbegin", hqdefault);
	}

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
	// onYouTubeIframeAPIReady();
	// iframeModal();
};
