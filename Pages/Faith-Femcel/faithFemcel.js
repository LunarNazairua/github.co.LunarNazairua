const fiathStories = [
    "/Images/FaithStories/Faith-Story-1.jpg",
    "/Images/FaithStories/Faith-Story-2-1.jpg",
    "/Images/FaithStories/Faith-Story-2-2.jpg",
    "/Images/FaithStories/Faith-Story-3-1.jpg",
    "/Images/FaithStories/Faith-Story-3-2.jpg",
    "/Images/FaithStories/Faith-Story-4.jpg",
    "/Images/FaithStories/Faith-Story-5-1.jpg",
    "/Images/FaithStories/Faith-Story-5-2.jpg",
]

function story(number) {
    if (number == 1) {
        document.getElementById('img1').src = "/Images/FaithStories/Faith-Story-" + number + ".jpg"
        document.getElementById('img2').src = ""
    } else if (number == 4) {
        document.getElementById('img1').src = "/Images/FaithStories/Faith-Story-" + number + ".jpg"
        document.getElementById('img2').src = ""
    } else {
        document.getElementById('img1').src = "/Images/FaithStories/Faith-Story-" + number + "-" + 1 + ".jpg"
        document.getElementById('img2').src = "/Images/FaithStories/Faith-Story-" + number + "-" + 2 + ".jpg"
    }
}

//        document.getElementById('img1').src = "/Images/FaithStories/Faith-Story-" + number + "-" + 1 + ".jpg"
//        document.getElementById('img2').src = "/Images/FaithStories/Faith-Story-" + number + "-" + 2 + ".jpg"