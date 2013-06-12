<?

class index_ctl {

  public $admin = false;
  public $capable = false;

  public function index() {


    $fb = new fb();
    $admin = false;

    $id = false;
    if (isset($fb->session['app_data']) && 
      strpos($fb->session['app_data'], 'id:') !== false) {
      $id = substr($fb->session['app_data'], 3);
    }

    if (isset($_REQUEST['id']) && !empty($_REQUEST['id'])) {
      $id = $_REQUEST['id'];
    }

    if (
      isset($fb->session['page']) && 
      isset($fb->session['page']['admin']) && 
      isset($fb->session['app_data']) && 
      $fb->session['page']['admin'] == true &&
      $fb->session['app_data'] == 'admin'
      ) {
      $this->admin = true;
    }

    if (
      isset($fb->session['page']) && 
      isset($fb->session['page']['admin']) && 
      $fb->session['page']['admin'] == true
      ) {
      $this->capable = true;
    }

    jade::c('index', ['admin' => $this->admin, 'capable' => $this->capable, 'id' => $id]); 

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
