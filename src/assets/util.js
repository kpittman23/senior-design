export default class Util {
    static createAnimationsArray(soundArray) {
        let animationsArray = [];
        let slashIndex;
        let dotIndex;
        for (let i = 0; i < soundArray.length; i++) {
            slashIndex = soundArray[i].lastIndexOf('/');
            dotIndex = soundArray[i].indexOf('.');
            let soundName = soundArray[i].slice(slashIndex + 1, dotIndex);
            if (soundName[0] === 'l') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push('lucyJump');
                        break;
                    case 'B':
                        animationsArray.push('lucySpin');
                        break;
                    case 'C':
                        animationsArray.push('lucyColors');
                        break;
                    case 'D':
                        animationsArray.push('lucyJump');
                        break;
                    case 'E':
                        animationsArray.push('lucySpin');
                        break;
                    default:
                        animationsArray.push('lucyIdle');
                        break;
                }
            } else if (soundName[0] === 'g') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push('geoffJump');
                        break;
                    case 'B':
                        animationsArray.push('geoffGlasses');
                        break;
                    case 'C':
                        animationsArray.push('geoffJump');
                        break;
                    case 'D':
                        animationsArray.push('geoffGlasses');
                        break;
                    case 'E':
                        animationsArray.push('geoffJump');
                        break;
                    default:
                        animationsArray.push('geoffGlasses');
                        break;
                }
            } else if (soundName[0] === 'f') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push('lucyJump');
                        break;
                    case 'B':
                        animationsArray.push('lucySpin');
                        break;
                    case 'C':
                        animationsArray.push('lucyColors');
                        break;
                    case 'D':
                        animationsArray.push('lucyJump');
                        break;
                    case 'E':
                        animationsArray.push('lucySpin');
                        break;
                    default:
                        animationsArray.push('lucyIdle');
                        break;
                }
            }
        }
        return animationsArray;
    }
}