const Jimp = require('jimp');
const fetch = require('node-fetch');
const download = require('image-downloader')

const getInfo = async (characterName) => {
  console.info('\x1b[36m%s\x1b[0m', `Fetching: ${characterName}`, '\x1b[0m');
  try {
    let response = await fetch(`https://maplelegends.com/api/character?name=${characterName}`);
    let charaterData = await response.json();
    let characterDest = await downloadImage(`https://maplelegends.com/api/getavatar?name=${characterName}`);
    return await createImage(characterDest, charaterData);
  } catch(e) {
    console.error("\x1b[35m", "Player Could Not Fetched", '\x1b[0m');
    return;
  }
}

async function downloadImage(url) {
  let dest = 'images/temp/characterImage.png';
  try {
    await download.image({url, dest})
    return dest;
  } catch (e) {
    console.error("\x1b[35m", "Download Image Failed", '\x1b[0m')
    return
  }
}

async function createImage(characterDest, charaterData) {
  try {
    let characterImage = await Jimp.read(characterDest);
    let backgroundImage = await Jimp.read('images/temp/leafre.jpg');
    let greyRect = await Jimp.read('images/temp/greyRect.png');
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
    characterImage.resize(200, 200)
    backgroundImage.crop(0, 200, 600, 400)
    greyRect.resize(290, 380)
    greyRect.brightness(-.8)
    greyRect.opacity(.8)
    greyRect.print(font, 20, 30, charaterData.name)
    greyRect.print(font, 20, 70, `Level: ${charaterData.level}`)
    greyRect.print(font, 20, 110, `Exp: ${charaterData.level === 200 ? "N/A" : charaterData.exp}`)
    greyRect.print(font, 20, 150, `Fame: ${charaterData.fame}`)
    greyRect.print(font, 20, 190, `Cards: ${charaterData.cards}`)
    greyRect.print(font, 20, 230, `Quests: ${charaterData.quests}`)
    greyRect.print(font, 20, 270, `Job: ${charaterData.job}`)
    greyRect.print(font, 20, 310, `Guild: ${charaterData.guild}`)
    backgroundImage.composite(greyRect, 10, 10)
    backgroundImage.composite(characterImage, 350, 160)
    await backgroundImage.write('images/temp/newCharacter.png')
    return 'images/temp/newCharacter.png'
  } catch(e){
    console.error("\x1b[35m", "Problem Creating Image", '\x1b[0m') 
    return
  }
}
const main = async (msgContent) => {
  if (!msgContent.args[1]) {
    console.info("\x1b[35m", "User did not provide a name.", '\x1b[0m')
    msgContent.msg.channel.send(`Please provide a name`);
  } else {
    let createdImage = await getInfo(msgContent.args[1]);
    if (createdImage) {
      msgContent.msg.channel.send("", {files: [createdImage]});
    } else {
      msgContent.msg.channel.send(`There was a problem finding: ${msgContent.args[1]}`);
    }
  }
}

module.exports.main = main;
