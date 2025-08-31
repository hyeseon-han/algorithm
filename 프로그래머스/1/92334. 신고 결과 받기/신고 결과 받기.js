function solution(id_list, report, k) {
    // 1. 신고내역 중복 제거
    const reports = [...new Set(report)];
    // 2. 신고 당한 횟수 기록
    const reportedCount = new Map();
    for(const r of reports){
        const [user, target] = r.split(' ');
        reportedCount.set(target, (reportedCount.get(target) || 0)+1);
    }
    // 3. 정지된 유저 목록
    const banned = new Set(
        [...reportedCount].filter(([_, count]) => count >= k).map(([id]) => id)
    );
    
    // 4. 유저별 메일 카운트
    const mailCount = new Map(id_list.map(id => [id, 0]));
    for(const r of reports){
        const [user, target] = r.split(' ');
        if(banned.has(target)){
            mailCount.set(user, mailCount.get(user) + 1);
        }
    }
    
    return id_list.map(id => mailCount.get(id));
    

    
    
  
}