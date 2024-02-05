/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestFriend(friends){
    let smallest = heights2[0];
    for (const friend of friends) {
        if (friend.length < smallest.length) {
            smallest = friend;
        }
    }
    return smallest;
}
const output = smallestFriend(heights2);
console.log(output);