<?

class index_ctl {

  public $admin = false;
  public $capable = false;
  public $states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

  public $images = [

    'coffee',
    'beachcrowd',
    'doghill',
    'eyeball',
    'houses',
    'road',
    'parkwoman',

    'beachhouses',
    'citycouple',
    'paddleboard',
    'skyfloor',
    'trainstation',
    'wineladies',
    'boatwoman',
    'oceanwoman',
    'womantrees',
    'beachgroup',
    'beachjumpgirl',
    'outlawsbar'
  ];

  public function index() {
    jade::c('index', ['admin' => $this->admin, 'imageJSON' => json_encode($this->images), 'images' => $this->images, 'states' => $this->states]); 
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
