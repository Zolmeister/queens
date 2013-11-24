cnt = 0
def solve(n, current=[]):
  global cnt
  if len(current)==n:
    cnt += 1
    print 'ans %d' %(cnt), current
  else:
    for i in xrange(n):
      for j, prev in enumerate(current):
        # same row
        if prev == i:
          break
        if prev-(len(current)-j)==i:
          break
        if prev+(len(current)-j)==i:
          break
      else:
        solve(n, current+[i])
    
solve(8)
print cnt
  
