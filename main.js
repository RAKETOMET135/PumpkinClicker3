const mainButton = document.querySelector("#click")
const counter = document.querySelector("#counter")
const upgrades = document.querySelector("#upgrades")

let pumpkins = 0

let lockedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let backgroundMusicAudio = new Audio("audio/BackgroundMusic.mp3")
let rainAudio = new Audio("audio/Rain.mp3")

function displayPumpkins(){
    if (pumpkins === 1 || pumpkins === -1){
        counter.innerText = `${pumpkins} pumpkin`
    }
    else {
        counter.innerText = `${AbbreviateNumber2(pumpkins, ",")} pumpkins`
    }
}

function onClickExtra(){
    if (pumpkins > 2 && lockedData[0] === 0){
        lockedData[0] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Upgrade click - ${5 * lockedData[0]} pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 5 * lockedData[0]){
                pumpkins -= 5 * lockedData[0]

                displayPumpkins()

                lockedData[0] += 1

                button.innerText = `Upgrade click - ${5 * lockedData[0]} pumpkins`
            }
        })
    }

    if (pumpkins > 50 && lockedData[1] === 0){
        lockedData[1] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Background music - 75 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 75){
                pumpkins -= 75

                lockedData[1] = 2

                let headphones = document.createElement("img")
                headphones.setAttribute("src", "images/HeadphonesRotation.gif")
                document.body.append(headphones)
                headphones.style.position = "absolute"
                headphones.style.right = "5%"
                headphones.style.top = "5%"
                headphones.style.zIndex = "5"

                backgroundMusicAudio.loop = true
                backgroundMusicAudio.play()

                button.remove()
            }
        })
    }

    if (pumpkins > 100 && lockedData[2] === 0 && lockedData[1] > 1){
        lockedData[2] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Click sound - 150 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 150){
                pumpkins -= 150

                lockedData[2] = 2

                button.remove()
            }
        })
    }

    if (lockedData[6] === 0 && pumpkins > 50){
        lockedData[6] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Subway surfers - 444 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 444){
                pumpkins -= 444

                lockedData[6] = 2
                
                let ss = document.querySelector("#ss")
                ss.style.visibility = "visible"
                ss.play()
                ib.volume = 0.5

                button.remove()
            }
        })
    }

    if (lockedData[7] === 0 && pumpkins > 200){
        lockedData[7] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Italian brainrot - 888 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 888){
                pumpkins -= 888

                lockedData[7] = 2
                
                let ib = document.querySelector("#ib")
                ib.style.visibility = "visible"
                ib.play()
                ib.muted = false
                ib.volume = 0.5

                button.remove()
            }
        })
    }

    if (lockedData[8] === 0 && pumpkins > 300){
        lockedData[8] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Italian brainrot translation - 5,555 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 5555){
                pumpkins -= 5555

                lockedData[8] = 2
                
                let ib = document.querySelector("#ib2")
                ib.style.visibility = "visible"
                ib.play()
                ib.muted = false
                ib.volume = 0.5

                button.remove()
            }
        })
    }

    if (lockedData[9] === 0 && pumpkins > 555){
        lockedData[9] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Click popup - 1,350 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 1350){
                pumpkins -= 1350

                lockedData[9] = 2

                button.remove()
            }
        })
    }

    if (lockedData[10] === 0 && lockedData[9] === 2){
        lockedData[10] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Click popup upgrade - 2,222 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 2222){
                pumpkins -= 2222

                lockedData[10] = 2

                button.remove()
            }
        })
    }

    if (lockedData[11] === 0 && lockedData[10] === 2){
        lockedData[11] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Italian click - 3,333 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 3333){
                pumpkins -= 3333

                lockedData[11] = 2
                document.querySelector("#click-image").setAttribute("src", "images/ButtonImage2.png")

                button.remove()
            }
        })
    }

    if (lockedData[12] === 0 && pumpkins > 1500){
        lockedData[12] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Corridor background - 5,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 5000){
                pumpkins -= 5000

                lockedData[12] = 2
                document.querySelector("#background-image").style.visibility = "visible"

                button.remove()
            }
        })
    }

    
    if (lockedData[13] === 0 && lockedData[12] === 2){
        lockedData[13] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Goofy sounds - 8,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 8000){
                pumpkins -= 8000

                lockedData[13] = 2
                let video = document.querySelector("#sfx")
                video.play()

                button.remove()
            }
        })
    }

    if (lockedData[14] === 0 && lockedData[12] === 2){
        lockedData[14] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Top 5 scary - 15,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 15000){
                pumpkins -= 15000

                lockedData[14] = 2
                let video = document.querySelector("#scary")
                video.play()
                video.muted = false
                video.style.visibility = "visible"
                video.volume = 0.5

                button.remove()
            }
        })
    }

    if (lockedData[15] === 0 && lockedData[13] === 2){
        lockedData[15] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Italian gym - 20,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 20000){
                pumpkins -= 20000

                lockedData[15] = 2
                let video = document.querySelector("#gym")
                video.play()
                video.muted = false
                video.style.visibility = "visible"
                video.volume = 0.5

                button.remove()
            }
        })
    }

    if (lockedData[16] === 0 && lockedData[14] === 2){
        lockedData[16] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Capybara background - 50,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 50000){
                pumpkins -= 50000

                lockedData[16] = 2
                let video = document.querySelector("#capybara")
                video.play()
                video.muted = true
                video.style.visibility = "visible"

                button.remove()
            }
        })
    }

    if (lockedData[17] === 0 && lockedData[16] === 2){
        lockedData[17] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Relaxation - 135,000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 135000){
                pumpkins -= 135000

                lockedData[17] = 2
                
                let lake = document.querySelector("#lake")
                lake.style.visibility = "visible"
                
                const audio = new Audio("audio/Lake.mp3");
                audio.loop = true
                audio.volume = 0.8
                audio.play()

                let videos = document.querySelectorAll("video")
                for (let i = 0; i < videos.length; i++){
                    const video = videos[i]

                    video.muted = true
                    video.pause()
                    video.style.visibility = "hidden"
                }

                backgroundMusicAudio.pause()
                rainAudio.pause()

                setTimeout(() => {
                    document.querySelector("#credits").style.visibility = "visible"
                }, 5000)

                button.remove()
            }
        })
    }

    if (lockedData[3] === 0 && lockedData[2] > 1){
        lockedData[3] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Relaxing rain - 300 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 300){
                pumpkins -= 300

                lockedData[3] = 2

                rainAudio.loop = true
                rainAudio.volume = 0.25
                rainAudio.play()

                button.remove()
            }
        })
    }

    if (lockedData[4] === 0 && lockedData[3] > 1){
        lockedData[4] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Rotating cube - 700 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 700){
                pumpkins -= 700

                lockedData[4] = 2

                let cube = document.createElement("img")
                cube.setAttribute("src", "images/RotatingCube.gif")
                document.body.append(cube)
                cube.style.position = "absolute"
                cube.style.left = "2%"
                cube.style.bottom = "2%"

                button.remove()
            }
        })
    }

    if (lockedData[5] === 0 && lockedData[6] > 1){
        lockedData[5] = 1

        let button = document.createElement("button")
        upgrades.append(button)
        button.innerText = `Subway surfers music - 2000 pumpkins`

        button.addEventListener("click", () => {
            if (pumpkins >= 2000){
                pumpkins -= 2000

                lockedData[5] = 2

                document.querySelector("#ss").muted = false
                document.querySelector("#ss").volume = 0.1
                
                button.remove()
            }
        })
    }
}

function setup(){
    const clickAudio = new Audio("audio/Click.mp3");

    mainButton.addEventListener("click", () => {
        let gain = 1

        pumpkins += 1000

        if (lockedData[0] > 1){
            pumpkins += lockedData[0] - 1

            gain += lockedData[0] - 1
        }

        if (lockedData[10] > 1){
            pumpkins += 2

            gain += 2
        }

        if (lockedData[11] > 1){
            pumpkins += 3

            gain += 3
        }

        if (lockedData[2] > 1){
            clickAudio.play()

            pumpkins += 2

            gain += 2
        }

        if (lockedData[9] > 1){
            let popup = document.createElement("p")
            popup.innerText = `+ ${gain}`
            document.body.append(popup)
            popup.style.left = "50%"
            popup.style.top = "50%"
            popup.style.position = "absolute"
            popup.style.translate = "-50% -350%"
            popup.style.color = "white"
            popup.style.userSelect = "none"

            if (lockedData[10] > 1){
                popup.style.animation = "jump-2 2s linear"
            }
            else{
                popup.style.animation = "jump 2s linear"
            }
    
            popup.addEventListener("animationend", () => {
                popup.remove()
            })
        }

        displayPumpkins()

        onClickExtra()
    })

    displayPumpkins()

    setInterval(loop, 100)
}

function loop(){
    if (lockedData[1] > 1){
        pumpkins += 1
    }

    if (lockedData[3] > 1){
        pumpkins += 2
    }

    if (lockedData[6] > 1){
        pumpkins += 2
    }

    if (lockedData[7] > 1){
        pumpkins += 5
    }

    if (lockedData[8] > 1){
        pumpkins += 25
    }

    if (lockedData[12] > 1){
        pumpkins += 15
    }

    if (lockedData[13] > 1){
        pumpkins += 50
    }

    if (lockedData[14] > 1){
        pumpkins += 100
    }

    if (lockedData[15] > 1){
        pumpkins += 110
    }

    if (lockedData[16] > 1){
        pumpkins += 200
    }

    displayPumpkins()
    onClickExtra()
}

function AbbreviateNumber2(number, symbol) {
    let converted_number = ""

    let front_symbol = ""

    number = Math.round(number)
    number = number.toString()
    if (number.slice(0, 1) == "-") {
        front_symbol = "-"
        number = number.slice(1, number.length)
    }

    let digits = number.length

    let t = 1
    for (let i = 0; i < digits; i++) {
        let letter = number.slice(digits - i - 1, digits - i)
        converted_number = converted_number + letter

        if (t == 3 && i != digits - 1) {
            t = 0
            converted_number = converted_number + symbol
        }
        t += 1
    }

    let finished_number = ""
    let converted_number_length = converted_number.length

    for (let i = 0; i < converted_number_length; i++) {
        let letter = converted_number.slice(converted_number_length - i - 1, converted_number_length - i)
        finished_number = finished_number + letter
    }

    finished_number = front_symbol + finished_number

    return finished_number
}

setup()