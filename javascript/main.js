function DisplayPopUpScreen1()
{
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("popUpScreen1").style.display = 'block';
}

function DisplayPopUpScreen2()
{
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("popUpScreen2").style.display = 'block';
}

function ClosePopUpScreen()
{
    document.getElementById("overlay").style.display = 'none';
    document.getElementById("popUpScreen1").style.display = 'none';
    document.getElementById("video-avoidRock").pause();
    document.getElementById("video-avoidRock").currentTime = 0;

    document.getElementById("overlay").style.display = 'none';
    document.getElementById("popUpScreen2").style.display = 'none';
}