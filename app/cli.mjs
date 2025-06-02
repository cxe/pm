import { isIdentifierStartChar } from './string.mjs';

export const params = (param) => {
    const args=[], opts={};
    if (Array.isArray(param) && param.length) {
        for(const i in param){
            let p = param[i];

            if (p === '--') {
                args.push(...param.slice(i + 1));
                break;
            } else if (p.startsWith('--')) {
                opts[p.slice(2)]=true;
            } else if (p.startsWith('-')) {
                for (const flag of p.split('').filter(isIdentifierStartChar)) {
                    opts[flag]=true;
                }
            } else {
                args.push(p);
            }
        }
    } else if (typeof param === 'string' && param.length) {
        args.push(param); // todo parse
    }
    return [args, opts];
};

export default async function CLI(cmd){
    CLI[cmd.name] = cmd;
    const result = await CLI[cmd.name](...parse(process.argv.slice(2)));
    if (typeof result !== 'undefined') {
        process.stdout.write(`${result}\n`);
    }
};
