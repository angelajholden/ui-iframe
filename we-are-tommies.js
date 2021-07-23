export default () => {
	// const script = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
	const video = document.querySelector(".video");

	// if (!script && video) {
	//     const tag = document.createElement('script');
	//     tag.src = 'https://www.youtube.com/iframe_api';
	//     const firstScriptTag = document.getElementsByTagName('script')[0];
	//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	// }

	let player;
	// eslint-disable-next-line
	function onYouTubeIframeAPIReady() {
		if (video) {
			// eslint-disable-next-line
			player = new YT.Player("video", {
				events: {
					// eslint-disable-next-line
					onReady: iframeModal,
				},
			});
		}
	}

	function iframeModal() {
		if (video) {
			const container = video.querySelector(".embed-container");
			const thumb = video.querySelector(".video_thumb");
			const close = video.querySelector(".lines");

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
	}

	window.onload = () => {
		onYouTubeIframeAPIReady();
		iframeModal();
	};
};
