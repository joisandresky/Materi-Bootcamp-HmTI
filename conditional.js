// >, <, >=, <=, ==, !=, !==, ===

// 1. if
if (1 != 0) {
  console.log('[IF] satu tidak sama dengan 0');
}

// 2. if else
if (1 != 1) {
  console.log('[IF:ELSE] 1 tidak sama dengan 1');
} else {
  console.log('[IF:ELSE] 1 sama dengan 1');
}

// 3. if else if
if (1 != 1) {
  console.log('[IF:ELSE IF] 1 tidak sama dengan 1');
} else if (1 > 1) {
  console.log('[IF:ELSE IF] tapi 1 lebih dari 0');
}

// 4. if - else if - else
if (1 != 1) {
  console.log('[IF:ELSE IF:ELSE] 1 tidak sama dengan 1');
} else if (1 > 1) {
  console.log('[IF:ELSE IF:ELSE] tapi 1 lebih dari 0');
} else {
  console.log('[IF:ELSE IF:ELSE] ambil semua bro')
}

if (1 > 0) {
  console.log('ternyata benar');
  if (2 > 1) {
    console.log('2 lebih dari 1');
    if (3 > 2) {
      if (4 > 3) {
        if (5 > 4) {

        } else {

        }
      } else if (6 > 5) {

      }
    } else {

    }
  }
  console.log('yg 2 > 1 bisa jadi salah bro');
}

// elif, elsif, ElseIf

// console.log('Apakah Sama ? ', 1 === '1');
// 1 === '1' // false
// 1 == '1' // true

// nodejs -> nodejs.org 10.16
// git -> git-scm.com