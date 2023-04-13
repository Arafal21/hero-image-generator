const redKnob = document.querySelector('.red-color')
const greenKnob = document.querySelector('.green-color')
const blueKnob = document.querySelector('.blue-color')

const rgbDisplay = document.querySelector('.rgb-color-display')
const heroBg = document.querySelector('.hero-bg')

const fileInput = document.querySelector('#my-file-input')
const textInput = document.querySelector('.text-typing')
const increaseSizeBtn = document.querySelector('.increase-btn')
const decreaseSizeBtn = document.querySelector('.decrease-btn')
const customText = document.querySelector('.custom-text')
const italicTextCheckbox = document.querySelector('#italic')
const boldTextCheckbox = document.querySelector('#bold')

let fontSize = 20
let alpha = 0.4

let red = redKnob.value
let green = greenKnob.value
let blue = blueKnob.value

const resetPage = () => {
	location.reload()
}

fileInput.addEventListener('blur', () => {
	if (fileInput.files.length > 0) {
		window.removeEventListener('beforeunload', resetPage)
		window.addEventListener('beforeunload', resetPage)
	}
})

document.addEventListener('DOMContentLoaded', () => {
	const recentImageDataUrl = localStorage.getItem('recent-image')

	if (recentImageDataUrl) {
		document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
	}
})

document.querySelector('#my-file-input').addEventListener('change', function () {
	const reader = new FileReader()

	reader.addEventListener('load', () => {
		localStorage.setItem('recent-image', reader.result)
		document.querySelector('#imgPreview').setAttribute('src', reader.result)
	})

	reader.readAsDataURL(this.files[0])
})

const displayRgbInParagraph = () => {
	rgbDisplay.textContent = `rgba(${red}, ${green}, ${blue}, .4)`
	heroBg.style.background = `rgba(${red}, ${green}, ${blue}, .4)`
}

redKnob.addEventListener('input', () => {
	red = redKnob.value
	displayRgbInParagraph()
})

greenKnob.addEventListener('input', () => {
	green = greenKnob.value
	displayRgbInParagraph()
})

blueKnob.addEventListener('input', () => {
	blue = blueKnob.value
	displayRgbInParagraph()
})

const changeText = () => {
	customText.textContent = textInput.value
}

const increaseSize = () => {
	fontSize += 2
	customText.style.fontSize = fontSize + 'px'
}
const decreaseSize = () => {
	fontSize -= 2
	customText.style.fontSize = fontSize + 'px'
}

const italicText = () => {
	customText.classList.toggle('italic-text')
}
const boldText = () => {
	customText.classList.toggle('bold-text')
}

textInput.addEventListener('keyup', changeText)
increaseSizeBtn.addEventListener('click', increaseSize)
decreaseSizeBtn.addEventListener('click', decreaseSize)
boldTextCheckbox.addEventListener('click', boldText)
italicTextCheckbox.addEventListener('click', italicText)
