const extractAudio= require('ffmpeg-extract-audio');

console.log("AUDIO EXTRACTOR!");

async function audioExtracter(){
    console.log("Processing");
    const result=await extractAudio({
        input: './mediaFiles/sample_1280x720_surfing_with_audio.mp4',
        output:'./output/test.mp3'
    })
    console.log("Processing Done!");
}

audioExtracter()
