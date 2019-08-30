const data = [
  {
    id: 'the-hare-and-the-tortoise',
    title: 'The Hare and the Tortoise',
    text: `Once, a hare saw a tortoise walking slowly with a heavy shell on his back. The hare was very proud of himself and he asked the tortoise. "Shall we have a race?" The tortoise agreed. They started the running race. The hare ran very fast. But the tortoise walked very slowly. The proud hare rested under a tree and soon slept off. But the tortoise walked very fast, slowly and steadily and reached the goal. At last, the tortoise won the race.`
  }
  // {
  //   id: 'the-sick-lion',
  //   title: 'The Sick Lion',
  //   text: `A lion, unable from old age and infirmities to provide himself with food by force, resolved to do so by artifice. He returned to his den, and lying down there, pretended to be sick, taking care that his sickness should be publicly known. The beasts expressed their sorrow, and came one by one to his den, where the lion devoured them. After many of the beasts had thus disappeared, the fox discovered the trick and presenting himself to the lion, stood on the outside of the cave, at a respectful distance, and asked him how he was. "I am very middling," replied the Lion, "but why do you stand without? Pray enter within to talk with me." "No, thank you," said the Fox. "I notice that there are many prints of feet entering your cave, but I see no trace of any returning."`
  // },
  // {
  //   id: 'the-shepherds-boy-and-the-wolf',
  //   title: `The Shepherd's Boy and the Wolf`,
  //   text: `A shepherd-boy, who watched a flock of sheep near a village, brought out the villagers three or four times by crying out, "Wolf! Wolf!" and when his neighbors came to help him, laughed at them for their pains. The wolf, however, did truly come at last. The shepherd-boy, now really alarmed, shouted in an agony of terror: "Pray, do come and help me; the wolf is killing the sheep;" but no one paid any heed to his cries, nor rendered any assistance. The wolf, having no cause of fear, at his leisure lacerated or destroyed the whole flock.`
  // }
];

const defaultGhostData = {
  'the-hare-and-the-tortoise': `[{"d":"283.17","l":{"0":1,"223":1,"358":1,"516":1,"707":1,"876":1,"1224":1,"1461":1,"1733":1,"1876":1,"2079":1,"2149":1,"2439":1,"2665":1,"2911":1,"3150":1,"3339":1,"3542":1,"3734":1,"4026":1,"4229":1,"4375":1,"4656":1,"4757":1,"5017":1,"5241":1,"5500":1,"5682":1,"5850":1,"6029":1,"6253":1,"6514":1,"6804":1,"6995":1,"7153":1,"7434":1,"7660":1,"7829":1,"8065":1,"8210":1,"8401":1,"8626":1,"8784":1,"8953":1,"9223":1,"9483":1,"9664":1,"9900":1,"10190":1,"10444":1,"10753":1,"10912":1,"11083":1,"11338":1,"11541":1,"11744":1,"11983":1,"12149":1,"12317":1,"12500":1,"12733":1,"12916":1,"13240":1,"13466":1,"13656":1,"13816":1,"14129":1,"14353":1,"14590":1,"14803":1,"15311":1,"15523":1,"15736":1,"15974":1,"16346":1,"17100":1,"17368":1,"17517":1,"17706":1,"17933":1,"18076":1,"18336":1,"18538":1,"18738":2,"18988":1,"19359":1,"19506":1,"19753":1,"19878":1,"20034":1,"20294":1,"20383":1,"20643":1,"20822":1,"21035":1,"21194":1,"21600":1,"21620":1,"21766":1,"21958":1,"22150":1,"22432":1,"22644":1,"22869":1,"23218":1,"23286":1,"23523":1,"23649":1,"23837":1,"24065":1,"24266":1,"24490":1,"24682":1,"24828":1,"25042":1,"25266":1,"25434":1,"25617":1,"25851":1,"26111":2,"26483":1,"26731":1,"26900":1,"27078":1,"27291":1,"27403":1,"27550":1,"27742":1,"27921":1,"28158":1,"28316":1,"28530":1,"28753":1,"28888":1,"29126":1,"29304":1,"29451":1,"29666":1,"30026":1,"30374":1,"30757":1,"30960":1,"31071":1,"31240":1,"31477":1,"31588":1,"31836":1,"32038":1,"32266":1,"32478":1,"32624":1,"32938":1,"33065":1,"33232":1,"33481":1,"33659":1,"33897":1,"34041":1,"34278":1,"34468":1,"34817":1,"35065":1,"35469":1,"35717":1,"35919":1,"36066":1,"36182":1,"36437":1,"36651":1,"36776":1,"37033":1,"37168":1,"37450":1,"37709":1,"37900":1,"38092":1,"38203":1,"38396":1,"38677":1,"38812":1,"39036":1,"39239":1,"39466":1,"39688":1,"40016":1,"40232":1,"40399":1,"40599":1,"40802":1,"40949":2,"41319":1,"41400":1,"41579":1,"41748":1,"42017":1,"42152":1,"42355":1,"42524":1,"42749":1,"42932":1,"43067":1,"43245":1,"43449":1,"43561":1,"43806":1,"43999":1,"44179":1,"44316":1,"44470":1,"44605":1,"44842":1,"44999":1,"45258":1,"45403":1,"45617":1,"45820":1,"46090":1,"46283":1,"46405":1,"46642":1,"46967":1,"47216":1,"47383":1,"47474":1,"47677":1,"47867":1,"48026":1,"48194":1,"48351":1,"48599":1,"48849":1,"48914":1,"49240":1,"49432":1,"49566":1,"49792":1,"49971":1,"50084":1,"50299":1,"50523":1,"51017":1,"51220":1,"51379":1,"51583":1,"51716":1,"51850":1,"51985":1,"52110":1,"52536":1,"52671":1,"52833":1,"53044":1,"53133":1,"53316":1,"53493":1,"53631":1,"53886":1,"54259":1,"54403":1,"54550":1,"54700":1,"54843":1,"55067":1,"55327":1,"55719":1,"56069":1,"56316":1,"56566":1,"56992":1,"57183":1,"57317":1,"57577":1,"57713":1,"57970":1,"58232":1,"58579":1,"58826":1,"59208":1,"59649":1,"59759":1,"59871":1,"60051":1,"60209":1,"60378":1,"60501":1,"60760":1,"61008":1,"61154":1,"61314":1,"61583":1,"61773":1,"61976":1,"62301":1,"62494":1,"62785":1,"62909":1,"63090":1,"63370":2,"63633":1,"63979":1,"64236":1,"64473":1,"64632":1,"64866":1,"64957":1,"65294":1,"65721":1,"65935":1,"66229":1,"66486":1,"66645":1,"66936":1,"67240":1,"67386":1,"67545":1,"67701":1,"67860":1,"68050":1,"68209":1,"68422":1,"68625":1,"68837":1,"69085":1,"69265":1,"69457":1,"69660":1,"69839":1,"70032":1,"70493":1,"70628":1,"70852":1,"71054":1,"71493":1,"71832":1,"72158":1,"72303":1,"72438":1,"72719":1,"72866":1,"73169":1,"73417":1,"73667":1,"73778":1,"73957":1,"74204":1,"74331":1,"74532":1,"74789":1,"74983":1,"75274":1,"75622":1,"75824":1,"76105":1,"76241":1,"76410":1,"76649":1,"76916":1,"77232":1,"77568":1,"77782":1,"78199":1,"78434":1,"78749":1,"78932":1,"79221":1,"79281":1,"79638":1,"79865":1,"80088":1,"80214":1,"80436":1,"80572":1,"80809":1,"81033":1,"81235":1,"81495":1,"81686":1,"81934":1,"82159":1,"82532":1,"82720":1,"82914":1,"83272":1,"83295":1,"83475":1,"83665":1,"83916":1,"84250":1,"84432":1,"84565":1,"84700":1,"84903":1,"85265":1,"85444":1,"85915":1,"86175":1,"86399":1,"86557":1,"86782":1,"86931":1,"87312":1,"87448":1,"87570":1,"87772":1,"87975":1,"88154":1,"88382":1,"88503":1,"88919":1,"89234":1,"89699":1,"89988":1,"90134":1,"90415":1,"90584":1,"90787":1,"90901":1,"91068":1,"91451":1,"91923":1,"92070":1,"92298":1,"92543":1,"92914":1,"93003":1,"93138":1,"93363":1,"93521":1,"93715":1,"93892":1,"94039":1,"94309":1,"94548":1,"94668":1,"94915":1,"95132":1,"95422":1,"95523":1,"95670":1,"95826":1,"96065":1,"96266":1,"96502":1,"96704":1,"96931":1,"97947":3},"n":"2019. 8. 30."}]`
};

export const getDefaultGhostData = id => JSON.parse(defaultGhostData[id]);

export default data;
