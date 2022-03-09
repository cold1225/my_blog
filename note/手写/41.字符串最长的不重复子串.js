/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:

输入: s = ""
输出: 0
 */
const lengthOfLongestSubstring = function (s) {
    if (!s.length) {
        return 0
    }
    let res = 0
    const set = new Set()
    let i = 0, j = 0
    while(j < s.length) {
        const cur = s[j]
        if (!set.has(cur)) {
            set.add(cur)
            res = Math.max(res, set.size)
            j++
            continue
        }
        while(i < j && set.has(cur)) {
            set.delete(s[i++])
        }
        j++
    }
    return res
}
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))