<?

class index_ctl {

  public $admin = false;
  public $capable = false;

  public $images = [
    'beachhouses',
    'citycouple',
    'paddleboard',
    'skyfloor',
    'trainstation',
    'wineladies',
    'boatwoman',
    'coffee',
    'eyeball',
    'oceanwoman',
    'road',
    'beachcrowd',
    'womantrees',
    'beachgroup',
    'beachjumpgirl',
    'doghill',
    'houses',
    'outlawsbar',
    'parkwoman'
  ];

  public function index() {
    jade::c('index', ['admin' => $this->admin, 'imageJSON' => json_encode($this->images), 'images' => $this->images]); 
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
