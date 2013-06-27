<?

class index_ctl {

  public $admin = false;
  public $capable = false;
  public $states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

  public $images = [

    // these are sf
    'coffee' => [
      'correct' => 'You got this flat right. In New Zealand they call this a "flat white." With hundreds of coffee shops around Auckland there\'s plenty of buzz to fuel your adventure. Order yours the right way. Book your flight today.',
      'wrong' => 'Nope, that isn\'t Auckland. It\'s San Francisco. But Kiwis are passionate about coffee, too. Order a "flat white" at one of the many coffee shops around the city. Book your flight today.'
    ],
    'beachcrowd' => [
      'correct' => 'You knew this was one of California\'s finest. But did you know that Auckland\'s lifestyle is consistently ranked among the best in the world? The city\'s marine environment is its key attraction. And getting there is easy with daily flights from SFO.',
      'wrong' => 'It looks like it could be New Zealand, right? There are beautiful beaches within 15 minutes of Auckland\'s central business district, and a fascinating collection of offshore islands for adventurous day trips. And getting there is super easy with daily flights from SFO.'
    ],
    'doghill' => [
      'correct' => 'This pooch helped you sniff out the correct answer. This is the San Francisco Bay Area. Several of Auckland\'s headlands have been set aside as public parks, giving everyone access to the amazing views. See for yourself, and book a flight today. Flying daily from SFO to Auckland.',
      'wrong' => 'It looks like Auckland doesn\'t it? (It\'s not.) Auckland has a wonderful collection of natural lookouts, many of which are volcanic cones. From the summit of Mt. Eden, the highest in the city, you\'ll get a magnificent view of Auckland. Book a flight now and see them for yourself.'
    ],
    'eyeball' => [
      'correct' => 'Street art is part of San Francisco. The same is true for New Zealand. The creative and open friendly nature blends harmoniously in the world of arts and entertainment. Check out some of the urban districts of Auckland, and see what local artists are creating. Book now and check it out for yourself.',
      'wrong' => 'Auckland does have a lot of street art, but not this one. But there\'s a unique spirit in the work of New Zealand artists. Check out some of the urban districts of Auckland, and see what local artists are creating. Book now and check it out for yourself.'
    ],
    'houses' => [
      'correct' => 'San Francisco is known for its colorful architecture. But maybe it\'s time to discover some of Auckland\'s design gems, speckling a similar topographic landscape. Book your flight today and see for yourself.',
      'wrong' => 'You thought this was Auckland? Close. It’s San Francisco. But perhaps you need a New Zealand vacation to make sure this sort of mix-up never happens again? That’s what we thought.'
    ],

    'road' => [
      'correct' => 'Yes, this is a windy road near San Francisco. But it looks like it could be Auckland, New Zealand … except they drive on the other side. Test drive Auckland for yourself, and book your flight today.',
      'wrong' => 'Nope. This road and view isn’t Auckland, New Zealand. But it could be. Except they drive on the other side. This is a game, and it’s hard. Ease the pain with a vacation and book yourself a trip to Auckland.'
    ],
    'parkwoman' => [
      'correct' => 'This nature is one of Golden Gate Park\'s many walks. In New Zealand, you can experience nine Great Walks that take you through diverse and spectacular scenery. Book a flight today and find a hike that\'s just your type.',
      'wrong' => 'But don\'t worry. It looks like New Zealand because there are many walks just like this, right around Auckland. In fact, there are nine Great Walks that take you through diverse and spectacular scenery. Book a flight today and find a hike that\'s just your type.'
    ],
    'beachhouses' => [
      'correct' => 'Those hypnotizing colors are of the San Francisco Bay. But Auckland’s Bay is equally stunning, offering views of epic southern hemisphere sunsets and beaches everywhere. Book your flight today.',
      'wrong' => 'That’s not Auckland. But maybe you need to go check out the New Zealand city a little closer, so you can get this answer right next time. Sound good? Yeah. It does. Book your flight today.'
    ],

    // these are new zealand
    'citycouple' => [
      'correct' => 'Auckland lights up at night! With hundreds of restaurants, art galleries and clubs, this city stays up late. Book a flight now to discover it for yourself.',
      'wrong' => 'Auckland glows at night! Stylish shopping precincts, delectable restaurant districts and a sparkling nightlife have travelers raving. Book a flight now to discover it for yourself.'
    ],
    'paddleboard' => [
      'correct' => 'Stand-up paddling is hard. But getting this answer right? Not hard for you. With more than 9,300 miles of coastline, New Zealand is a water sport paradise. Hop on a board and spend an afternoon exploring Auckland’s waterways. Fly to Auckland daily from SFO.',
      'wrong' => 'Stand-up paddling is hard. So was this question. Redeem yourself by grabbing a board and spending the afternoon exploring Auckland’s waterways. With more than 9,300 miles of coastline, New Zealand is a water sport paradise. Fly to Auckland daily from SFO.'
    ],
    'skyfloor' => [
      'correct' => 'Not afraid of right answers? Well, what about heights? Check out the Sky Tower’s see-through floors for a new way to see Auckland. Book a flight now and see it for yourself!',
      'wrong' => 'Wrong answer. But check out that view. It’s SKYCITY’s see-through floor, a totally different view of the Auckland skyline. Book a flight now and grab an eye-full.'
    ],
    'trainstation' => [
      'correect' => 'All aboard! Travel by train and see all that Auckland has to offer. And if you fly Air New Zealand, you’ll travel like the Kiwis do. In style.',
      'wrong' => 'Your answer chugged to a stop. No problem. Travel by train and see all that Auckland has to offer. And if you fly Air New Zealand, you’ll travel like the Kiwis do. In style.'
    ],
    'wineladies' => [
      'correct' => 'You know your vines. Kumeu Wine Country, west of Auckland City, was established by early European settlers more than 70 years ago. Today, these wineries produce award-winning Chardonnay, Merlot, Cabernet Sauvignon and Pinot Gris. Book your flight now and get sipping.',
      'wrong' => 'More of a beer person? There are more than 25 wineries and vineyards on Waiheke, a large island that’s only 30 minutes by ferry from the city of Auckland. Waiheke’s climate is generally warmer than the mainland, with less humidity and rain and more sunshine hours. And Cabernets are the island’s speciality. Lucky you. Book your flight now and get sipping.'
    ],
    'boatwoman' => [
      'correct' => 'The Auckland Bay offers respite from the city, with unforgettable views. Take a 10-minute ferry to historic Devonport and return in time for dinner at Auckland’s Viaduct restaurant precinct. Set sail on a New Zealand adventure today.',
      'wrong' => 'Looks like your game is a bit rocky. But on the waters of the Auckland Bay, it’s smooth sailing. Commuter ferries and evening harbor cruises from downtown Auckland make it easy to experience the romance of the beautiful city sunset from out on the water. Set sail on a New Zealand adventure today.'
    ],
    'oceanwoman' => [
      'correct' => 'Auckland is home to some of New Zealand’s best beaches. Just 40 minutes from downtown Auckland, long black-sand beaches face the setting sun, almost uninhabited and continuously swept by long ocean swells from the Tasman Sea. Book a flight now and see for yourself!',
      'wrong' => 'Auckland is home to some of New Zealand’s best beaches. Long black-sand beaches stretch between rocky headlands along most of New Zealand’s west coast. From Piha’s black sand to stellar surf breaks, it’s your choice. Fly there now and try them all.'
    ],
    'womantrees' => [
      'correct' => 'It’s true. Auckland has some of New Zealand’s most popular urban hiking tracks. Discover a whole new world just outside the city. Book your flight now.',
      'wrong' => 'Take a hike. No, seriously. Check out one of Auckland’s popular walking trails. Discover a whole new world just outside the city. Book your flight now.'
    ],
    'beachgroup' => [
      'correct' => 'Take it in. There’s nothing like the beaches of Auckland just miles from the city’s buzz. Relax and enjoy the view from the edge of the world. Book your flight now.',
      'wrong' => 'You didn’t know this was Auckland. But you do know that this looks like a good time. New Zealand is better with friends. So grab a few and book flights to Auckland. We know you’ll love it.'
    ],
    'beachjumpgirl' => [
      'correct' => 'She’s jumping for joy, and with good reason. Auckland boasts some of New Zealand’s finest beaches. Don’t take our word for it, fly there now and find out for yourself.',
      'wrong' => 'She’s jumping. But not because you were right. Sorry. Auckland boasts some of New Zealand’s finest beaches. Don’t take our word for it, fly there now and find out for yourself.'
    ],
    'outlawsbar' => [
      'correct' => 'The only thing “outlawed” here is not having a good time. With fine dining, dancing, and nightlife that will keep you up all night, Auckland knows how to get down. Learn more for yourself by booking your flight today.',
      'wrong' => 'Nope. That’s Auckland. And the only thing “outlawed” here is not having a good time. With fine dining, dancing, and nightlife that will keep you up all night, New Zealand knows how to get down. Learn more for yourself by booking your flight today.'
    ],
    'womeneating' => [
      'correct' => 'Auckland’s Viaduct restaurant precinct offers incredible dining options. Grab a west-facing table to watch a dramatic southern hemisphere sunset. Book your flight to Auckland today.  We’ll save you a seat.',
      'wrong' => 'Guess you didn’t know about Auckland’s Viaduct restaurant precinct. There are so many restaurants, it’s hard to choose a place to watch the stunning southern hemisphere sunset.  Book your flight to Auckland today. We’ll save you a seat.'
    ]
  ];

  public function index() {

    $settings = [
      'liked' => false,
      'justliked' => false,
      'shared' => false,
      'registered' => false
    ];

    $fb = new fb();

    if ($fb->added()) {

      $user = new user(user::findOne(['id' => $fb->uid()]));

      if ($user->exists() && $user->tandc == true) {
        $settings['registered'] = true;
      }

      if ($user->exists() && $user->shared != null) {
        $settings['shared'] = true;
      }

      if ($fb->liked() && $user->liked != null) {
        $settings['liked'] = true;
      }

      if ($fb->liked() && $user->liked == null) {
        $settings['liked'] = true;
      }
      if ($user->exists() && $fb->liked() && $user->liked == null) {
        $settings['justliked'] = true;
        $user->liked = new MongoDate();
        unset($user->unliked);
        $user->save();
      }

      if (!$fb->liked() && $user->liked != null) {
        $user->unliked = time();
        unset($user->linked);
        $user->save();
      }

    }

    $uid = $fb->added() ? '"'.$fb->uid().'"' : false;

    jade::c('index', [
      'admin' => $this->admin, 'imageJSON' => json_encode(array_keys($this->images)), 
      'images' => array_keys($this->images), 'states' => $this->states, 'imageCopyJSON' => json_encode($this->images),
      'settings' => $settings, 'settingsJSON' => json_encode($settings), 'uid' => $uid]
    ); 

  }

  public function images() {

    jade::c('images', ['images' => $this->images]); 

  }

  public function share() {

    if (!isset($_REQUEST['uid']) || !isset($_REQUEST['post_id'])) {
      echo json_encode(['error' => true, 'status' => 'error uid or post_id']);
      return true;
    }

    $user = user::i(user::findOne(['id' => $_REQUEST['uid']]));
    $user->shared = new MongoDate();
    $user->share_post_id = $_REQUEST['post_id'];
    $user->save();

  }

  public function register() {

    define('KDEBUG_JSON', true);

    if (!isset($_REQUEST['form']) || !isset($_REQUEST['user'])) {
      echo json_encode(['error' => true, 'status' => 'error registering']);
      return true;
    }

    $form = json_decode($_REQUEST['form'], true);
    $facebook = json_decode($_REQUEST['user'], true);

    $user = user::i(user::findOne(['id' => $facebook['id']]));

    $user->id = $facebook['id'];
    foreach ($form as $key=>$value) {
      $user->$key = $value;
    }
    $user->facebook = $facebook;
    $user->save();

    echo json_encode(['success' => true, 'status' => 'registration successful']);
    return true;

  }

}
