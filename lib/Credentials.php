<?php
  /**
   * Credentials class
   */
  final class Credentials
  {
    private $db;
    private $apiAccess = false;
    private $addAccess = false;
    private $editAccess = false;

    public function hasApiAccess() {
      return $this->apiAccess;
    }

    public function hasAddAccess() {
      return $this->addAccess;
    }

    public function hasEditAccess() {
      return $this->editAccess;
    }

    /**
     * Check credentials. Returns true if checks out.
     */
    public function checkCredentials($username, $password) {
      // TODO: a very secure implementation.
      $this->apiAccess = true;
      $this->addAccess = true;
      $this->editAccess = true;
      return (strcmp($username, getenv('CMS_USER') ?: 'user') == 0 && strcmp($password, getenv('CMS_PASS') ?: 'pass') == 0);
    }

    /**
     * Constructor
     */
    public function __construct(DB $db) {
      $this->db = $db;
    }
  }
?>

