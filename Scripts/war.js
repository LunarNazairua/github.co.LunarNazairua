const Thing = [
    'NULL',
    'Colt Python',
    'Arctive Warfare',
    'Arctive Warfare Magnum'
]

const Images = [
    "/Images/twitter-pfp.jpg",
    "/Images/Weapons/Guns/Colt-Python.jpg",
    "/Images/Weapons/Guns/Arctic-Warfare.webp",
    "/Images/Weapons/Guns/Arctic-Warfare-Magnum.jpg",
]

const Description = [
    "AHHHHHHHHH",
    "The Colt Python is a double action revolver chambered for the .357 Magnum cartridge. It was first introduced in 1955 by the Colt's Manufacturing Company. Pythons have a reputation for accuracy, smooth trigger pull, and a tight cylinder lock-up. Pythons, built on Colt's large I-frame, are similar in size and function to the Colt Trooper and Colt Lawman revolvers.",
    "The Accuracy International Arctic Warfare rifle is a bolt-action sniper rifle designed and manufactured by the British company Accuracy International. It has proved popular as a civilian, police, and military rifle since its introduction in the 1980s. The rifles have some features that improve performance in very cold conditions (which gave the rifle its name) without impairing operation in less extreme conditions. ",
    "The Accuracy International AWM (Arctic Warfare Magnum or AI-Arctic Warfare Magnum) is a bolt-action sniper rifle manufactured by Accuracy International designed for magnum rifle cartridges. The Accuracy International AWM is also unofficially known as the AWSM (Arctic Warfare Super Magnum), which typically denotes AWM rifles chambered in .338 Lapua Magnum. "
]

function Descride(index) {
    document.getElementById('weapon-img').src = Images[index]
    document.getElementById('article-1').innerHTML = Description[index]
    document.getElementById('sub-title').innerHTML = Thing[index]
}