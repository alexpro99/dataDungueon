module.exports.habilitys = [
    {
        lv: 1,
        hab: 'placaje'
    }
];


module.exports.placaje = (hero) => hero.totalAtk() * 0.3 * hero.lv;