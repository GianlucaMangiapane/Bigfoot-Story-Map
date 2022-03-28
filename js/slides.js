const slides = [
  {
    title: "JavaCrypt[id]: Sightings of the Sasquatch",
    content: `
      Geospatial evidence of the elusive creature around the world.
      <img
        src="img/bigfoot-computer.jpg"
        alt="stock image of funny bigfoot">
    `,
    era: null,
    bounds: [[-75, -180], [75, 180]],
  },

  {
    title: "So what exactly is a Bigfoot?",
    content: `
      Bigfoot is **Cryptid**, or an "animal that's been claimed to exist but there is no proven fact it exists",
      similar to the "Loch Ness Monster" or available office hours slots. Large, hairy, human-like Ape creatures have been
      reported throughout human time and place, either called **Sasqutch** in North America, the **Yeti** in Tibet/Nepal, the **Yeren** in China,
      and the **Skunk Ape** in the American South.

      Skeptics claim sightings are either partially visible animals or humans in costumes,
      but today we will go through some famous sightings, and you can be the judge.

      <img
        src="img/thumbs-up-big-foot.gif"
        alt="thumbs up gif">
    `,
    era: null,
    bounds: [[-75, -180], [75, 180]],
  },

  {
    title: '1924: Should have seen the other guy at Ape Canyon, Washington State',
    content: `
      Five prospectors coming back from work claimed to
      have gotten into a brawl, beating back four "gorilla men covered with long, black hair,”
      and weighing around 400 pounds. Locals dispute this happened though since no video was uploaded to Worldstar.
      <img
        src="img/1924.jpg"
        alt="Newspaper photo of the miner fight">
    `,
    era: '1924 Miner Fight',
    showpopups: true,
  },

  {
    title: '1951: Yeti to Party in Menlung Basin, Nepal',
    content: `
      British explorer Eric Earle Shipton snapped this photo while trekking through the Himalayas in 1951,
      alleging that the footprints belonged to a Yeti, measuring twice the size of his own boot.
      You know what they say about BigFeet...
      <img
        src="img/yeti.jpg"
        alt="Yeti Footrpints">
    `,
    era: 'Menlung Basin',
    showpopups: true,
  },

  {
    title: '1967: America\'s Next Top Bigfoot in Bluff Creek, CA',
    content: `
      Arguably the most famous and influential Bigfoot video is the 1967 film shot
      by Roger Patterson and Bob Gimlin in Northern California, making Bigfoot a movie star.
      Although some delusional viewers believe it to be an actor in a gorilla costume,
      this film never got nominated for an award so must not be a very good actor.
      <img
        src="img/Patterson-Gimlin.gif"
        alt="Patterson-gimlin video">
    `,
    era: '1967 Bluff Creek',
    showpopups: true,
  },

  {
    title: '1980: Silent but Deadly in Johnstown, Pennsylvania ',
    content: `
      Locals in Johnstown,
      were startled by a footprint measuring 17.75 inches found
      close to a family's home in 1980. According to the Associated Press,
      the footprint coincided with reports of a potent and unusual smell in the area.
      The family promptly filed a restraining odor.
      <img
        src="img/Johnstown-Pennsylvania.jpg"
        alt="Johnstown Footprint photo">
    `,
    era: '1980 Johnstown',
    showpopups: true,
  },

  {
    title: '1994: A Freeman and an Ape Man near the Blue Mountains, Oregon',
    content: `
      In 1994, US Forest Service worker and avid bigfoot cryptologist Paul Freeman shot a video of what is
      said to be a at least 2 Sasquatch wandering around.
      The quality isn't great for specific detail, but Freeman was happy with the video since he remembered to
      take the cap off the lense this time.
      <img
        src="img/freeman.gif"
        alt="Freeman Video">
    `,
    era: '1980 Blue Mountains',
    showpopups: true,
  },

  {
    title: '1995: A Yeren Review of Shennongjia National Nature Reserve, China',
    content: `
      In Shennongjia National Nature Reserve a park ranger, Yuan Yuha observed the yeren through binoculars at a distance of approximately 500 m.
      It was covered in reddish brown hair, reclining and sunning itself on the exposed facing slope.
      Yuan ended up giving the Yeren a fine for sunbathing topless in a childrens friendly park.
      <img
        src="img/yeren.jpg"
        alt="Yeren Footprint Cast">
    `,
    era: '1995 Yeren',
    showpopups: true,
  },

  {
    title: '2000: Florida Man spots Skunk Ape in Big Cyprus Reserve, Florida',
    content: `
      David Shealy lived in a tree hammock for a few years and in July of 2000 captured footage of a Skunk Ape
      strolling across the swamp, and then breaking into a run, evidence that Sasquatch enjoy exercise just like humans.
      <br/><br/>
      Shealy was heard muttering that it wouldn't be a bad idea for him to go to the gym as well.
      <img
        src="img/skunkape.gif"
        alt="Skunk Ape Footage">
    `,
    era: '2000 Skunk Ape',
    showpopups: true,
  },

  {
    title: '2001: A Youth Group has a Revelation in Marble Mountains, California',
    content: `
      A church youth group was camping in the Marble Mountain Wilderness when
      leader Jim Mills noticed a strange-looking creature skulking along a ridge nearby.
      When it didn't respond to the name of Jesus, they realized that the only thing
      it could possibly be was Bigfoot. Conversion attempts ended in frustration.
      <img
        src="img/marble.gif"
        alt="Marble Mountain Footage">
    `,
    era: '2001 Marble Mountains',
    showpopups: true,
  },

  {
    title: '2007: Bad Hair Day in Allegheny National Forest, Pennsylvania',
    content: `
      In 2007, hunter Rick Jacobs captured some of the most famous bigfoot images to date with a
      camera mounted to a tree in Pennsylvania’s Allegheny National Forest.
      Skeptics believe the animal is just a bear suffering from hair loss,
      but Sasquatch are hesitant to shave their thinning hair because not everyone will look like Vin Diesel.
      <img
        src="img/Allegheny-National-Forest.jpg"
        alt="Allegheny Photo">
    `,
    era: '2007 Allegheny',
    showpopups: true,
  },

  {
    title: '2012: Just have to run faster than your friend in Provo Canyon, Utah',
    content: `
      In October 2012, two hikers in Provo Canyon thought they spotted a bear in the woods and started filming.
      When the creature stood up on two legs, the hikers ran—abruptly ending the shaky video,
      out of consideration to all those who suffer from motion sickness.
      <img
        src="img/provo1.gif"
        alt="Stand Up Bigfoot Video">
    `,
    era: '2012 Provo Sighting',
    showpopups: true,
  },

  {
    title: '2012: Bigfoot can throw a football over those mountains in Provo Canyon, Utah',
    content: `
      Later in December of 2012, another hiker was walking through the Utah Hills near Provo Canyon
      when he spotted a large animal in the woods. As he approached, the Sasquatch stood up
      on two legs and threw a rock. While his team could use a left handed pitcher in their sunday softball league,
      the hiker passed on asking Bigfoot.
      <img
        src="img/throw.gif"
        alt="Bigfoot Throwing Video">
    `,
    era: '2012 Provo Throwing',
    showpopups: true,
  },

  {
    title: '2015: Bigfoot makes an enemy of PETA in Yellowstone National Park, Wyoming',
    content: `
      In 2015, video footage emerged of a group of Sasquatch stalking and hunting Bison near Old Faithful in Yellowstone national park.
      When superimposing their image next to the bison for scale, they were estimated to be 8 or more feet tall.
      With the first documentation of Bigfoot hunting animals for food, PETA has focused all their efforts on converting Sasquatch to a vegan diet.
      <img
        src="img/bison.gif"
        alt="Bigfoot and Bison video">
      <img
        src="img/buffalo.gif"
        alt="Bigfoot superimposed">
    `,
    era: '2015 Yellowstone',
    showpopups: true,
  },

  {
    title: '2019: It\s just a prank bro in Tunica, Mississippi',
    content: `
    Mississippi resident Josh Highcliff captured video of this potential bigfoot
    while hunting on his property in 2019. Too scared to go back, he posted the footage to
    YouTube asking for help to identify the animal or for a prankster to come forward.
    When asked, the local costume shop had no comment except "get a life and stop calling".
    <img
      src="img/mississippi.gif"
      alt="Mississippi Skunk Ape">
    `,
    era: '2019 Tunica',
    showpopups: true,
  },

  {
    title: '2020: Playing Red Light, Green Light in Sherman Pass, Washington State',
    content: `
      The Washington Department of Transportation shared a traffic camera's
      photograph that unbelievably showed what appeared to be a Sasquatch
      right next to the road. Local's are not surprised,
      considering its a known fact Uber's are notoriusly hard to get in the area.
      <img
        src="img/washington.jpg"
        alt="Sherman Pass Photo">
    `,
    era: '2020 Sherman',
    showpopups: true,
  },

  {
    title: 'Year Unknown: Stay Away from my Baby in Yosemite National Park, California',
    content: `
      We don't know who filmed this video, where it was filmed or what year it was filmed,
      and as such its the strongest evidence we have of Bigfoot exisiting.
      It was posted to Youtube on the fourth of July and its speculated to be in Yosemite National Park.
      It shows a mother Sasquatch holding a cub, before noticing the cameraman is not wearing a mask,
      and she distances herself since her family is not vaccinated.
      <img
        src="img/fourthofjuly.gif"
        alt="Fourth of July Video">
    `,
    era: 'Fourth of July',
    showpopups: true,
  },

  {
    title: 'I want to believe...',
    content: `
      Sources as follows: **All That's Interesting** - **Outside Online** - **Wide Open Spaces** -
      **The RELICT HOMINOID INQUIRY 1:57-66 (2012)** - **Smithsonian Magazine** -
      **CNN**
      <img
        src="img/xfiles.jpg"
        alt="I want to believe">
    `,
    era: null,
    bounds: [[-75, -180], [75, 180]],
  },
];
