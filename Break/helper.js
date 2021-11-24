//stateless logic goes here
export const createBreak = (num) =>
{
    let ret = []
    for (let i=0; i<num; i++)
        ret.push(i+1)
    return ret
}