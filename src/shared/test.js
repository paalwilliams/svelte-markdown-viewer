const y = {
    office: 'substitute_president'
}

const x = {
    office: 'substitute_president'
}

var a = x.office,
    b = y.office;
let criteria1 = ['president', 'director'];

if (criteria1.includes(a)) return -1;
if (a == 'president' || a == 'substitute_president') return -1;

if (b == 'president' || b == 'substitute_president') return 1;

if (a == 'director') return -1;

if (b == 'director') return 1;

let criteria3 = ['general_secretary', 'substitute_general_secretary']

if (criteria3.includes(a)) return 1;

if (b == 'general_secretary' || b == 'substitute_general_secretary') return -1;