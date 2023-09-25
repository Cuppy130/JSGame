class GAMESTATE {
    constructor() {
        this.AuSrc = new Audio;
        this.songInfo = {};
        this.modifiers = {
            flip: 0,
            invert: 0,
            beat: 0,
            reverse: 0,
            split: 0,
            alternate: 0,
            centered: 0,
            drunk: 0,
            tipsy: 0,
            tiny: 0,
        }
        this.attacks = [
            {beat: 0, value: 1, mod: "xmod"}
        ]
        this.beat = 0;
        
    }
    update(beatInfo)
    {
        this.beat = 60 / (beatInfo.curbpm + beatInfo.beatoffset) * (beatInfo.time + beatInfo.timeoffset);
    }
    parseSoInfo(songInfo){
        return {SongInfo: {}, BeatInfo:{}}
    }
}