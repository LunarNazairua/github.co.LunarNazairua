const twitterFollowers = [
    "Freak_Toxic1013",
    "AAAx3c",
    "troikosfi",
    "ObsessionArtis2",
    "churroasebi",
    "Lil_Nuggeet"
]

const followerPFPS = [
    "/Images/Follower-pfp.jpg"
]

function follwerPick(number) {
    var index
    index = number - 1
    document.getElementById('follower-pfp').src = followerPFPS[index]
}