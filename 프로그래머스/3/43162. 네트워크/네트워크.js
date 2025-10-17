function solution(n, computers) {
    const arr = computers.flat();
    const group = Array.from({length: n}, (_,idx)=> new Set([idx]));
    for(let i = 0; i < arr.length; i++){
        const x = Math.floor(i/n);
        const y = i % n; 
        const ele = arr[i];
        
        if(x===y) continue;
        
        if(ele === 1){
            
            const groupX = group.find(set => set.has(x));
            const groupY= group.find(set => set.has(y));
            if (groupX !== groupY) {
              for (const node of groupY) groupX.add(node);
              group.splice(group.indexOf(groupY), 1); 
            }
        }
    }
    
    return group.length;
}