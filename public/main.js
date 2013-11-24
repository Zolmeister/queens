function solve(n) {
  var ans = []
  solver([])
  return ans
  function solver(current) {
    if (current.length === n)
      ans.push(current)
    else
      for (var i=0; i < n; i++) {
        for (var j=0, l=current.length; j < l; j++) {
          var prev = current[j]
          if (prev === i)
            break
          if (prev-(l-j) === i)
            break
          if (prev+(l-j) === i)
            break
        }
        if (j === l)
          solver(current.concat([i]))
      }
  }
}

(function loop(solutions) {
  var cnt = 0
  var board = new ChessBoard('board', {
    moveSpeed: 'slow',
    position: '1/1/2/1q1q1q1q/q1q1q1q1/1/1/1'
  });
  
  board.cache()
  
  next()
  function next() {
    board.position(moveTo(solutions[cnt]))
    cnt++
    cnt %= solutions.length
    setTimeout(next, 800)
  }
})(_.shuffle(solve(8)))

$('#source').html('<code>'+solve.toString()+'</code>')
hljs.initHighlightingOnLoad();

function moveTo(solution) {
  var colToLet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  var pos = {}
  
  for(var i=0, l=solution.length; i < l; i++) {
    var col = i
    var row = solution[i]
    pos[colToLet[col] + (row+1)] = 'bQ'
  }
  return pos
}
