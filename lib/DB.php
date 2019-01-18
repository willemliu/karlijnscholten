<?php
  /**
   * DB class
   */
  final class DB
  {
    private $connection = 0;
    private $host = getenv('DB_HOST') ? getenv('DB_HOST') : "host";
    private $dbname = getenv('DB_NAME') ? getenv('DB_HOST') : "dbname";
    private $user = getenv('DB_USER') ? getenv('DB_HOST') : "name";
    private $pass = getenv('DB_PASS') ? getenv('DB_HOST') : "pass";
    private $dbh;
    private $queryCount = 0;

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
