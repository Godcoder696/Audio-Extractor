const extractAudio= require('ffmpeg-extract-audio');

console.log("WELCOME TO AUDIO EXTRACTOR!\n");

const input= process.env.FILE_NAME ||  "sample_1280x720_surfing_with_audio.mp4" ;
const output= process.env.OUTPUT_FILE_NAME || "output.mp3";

async function audioExtracter(){
    try {

        console.log("Converting File mp4 to mp3\n");

        const result=await extractAudio({
            input: `./mediaFiles/${input}`,
            output: `./output/${output}`
        })

        console.log("Conversion Successfully Completed!\n Check output folder to locate the mp3 file");

    } catch (error) {
        console.log("Error Occurred!\n",error);
    }
}

audioExtracter()
