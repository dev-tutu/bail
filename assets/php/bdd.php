<?php

class Database {

    private $host;
    private $port;
    private $dbName;
    private $user;
    private $password;
    private $conn;

    public function __construct($host, $port, $dbName, $user, $password) {

        $this->host = $host;
        $this->port = $port;
        $this->dbName = $dbName;
        $this->user = $user;
        $this->password = $password;
    }

    public function connect() {
        try {
            $this->conn = new PDO("mysql:host=$this->host;port=$this->port;dbname=$this->dbName", $this->user, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            exit;
        }
    }

    public function disconnect() {
        $this->conn = null;
    }

    public function executeQuery($sql, $params = []) {
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            echo "Query execution failed: " . $e->getMessage();
            return null;
        }
    }

    public function lastID() {
        try {
            return $this->conn->lastInsertId();
        } catch (PDOException $e) {
            echo "Query execution failed: " . $e->getMessage();
            return null;
        }
    }

    public function fetchSingle($sql, $params = []) {
        $stmt = $this->executeQuery($sql, $params);
        return $stmt ? $stmt->fetch(PDO::FETCH_ASSOC) : null;
    }

    public function fetchAll($sql, $params = []) {
        $stmt = $this->executeQuery($sql, $params);
        return $stmt ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];
    }

    public function getObjet() {
        return $this->conn;
    }

    public function getDatabaseStatus() {
        if ($this->conn) {
            echo "Database connection is active.";
        } else {
            echo "Database connection is not active.";
        }
    }
}


?>