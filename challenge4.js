/** Complete the function registerToVote(name, unregisteredVoters)
 * that takes in the name of a newly registered voter and 
 * an array of names of those who have not yet registered to vote.
 * Your function must return an array, 
 * with the newly registered voter's name removed.
 * */


const registerToVote = (name, unregisteredVoters) => {
    let voted = unregisteredVoters.indexOf(name);
    unregisteredVoters.splice(voted, 1);
    return unregisteredVoters;
};


module.exports = registerToVote