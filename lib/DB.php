<?php
  /**
   * DB class
   */
  final class DB
  {
    private $connection = 0;
    private $host;
    private $dbname;
    private $user;
    private $pass;
    private $dbh;
    private $queryCount = 0;

    public function __construct() {
        $this->host = getenv('DB_HOST') ?: "host";
        $this->dbname = getenv('DB_NAME') ?: "dbname";
        $this->user = getenv('DB_USER') ?: "name";
        $this->pass = getenv('DB_PASS') ?: "pass";
    }

    /**
     * Return the logged query count. This isn't accurate.
     */
    public function getQueryCount() {
      return $this->queryCount;
    }

    /**
     * Increment query count by 1.
     */
    public function incrementQueryCount() {
      $this->queryCount++;
    }

    public function connect() {
      try {
        if($this->dbh == null) {
          # MS SQL Server and Sybase with PDO_DBLIB
          //$this->DBH = new PDO("mssql:host=$host;dbname=$dbname, $user, $pass");
          //$this->DBH = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");

          # MySQL with PDO_MYSQL
          $this->dbh = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);

          # SQLite Database
          //$this->DBH = new PDO("sqlite:my/database/path/database.db");
        }
        return $this->dbh;
      }
      catch(PDOException $e) {
        throw $e;
      }
    }

    public function disconnect() {
      $this->dbh = null;
    }

    /**
     * Constructor
     */
    public function __construct()
    {
    }
  }
?>
