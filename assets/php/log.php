<?php

    class LogManager {
        
        private $logDirectory;
        private $logFilePrefix;
        private $logFileExtension;
        private $logFilePath;

        private $logLevels = [
            'DEBUG' => "\033[0;37m",    // Gris
            'INFO' => "\033[0;32m",     // Vert
            'WARNING' => "\033[0;33m",  // Jaune
            'ERROR' => "\033[0;31m"     // Rouge
        ];
        
        private $resetColor = "\033[0m"; // Réinitialisation de la couleur

        public function __construct($logDirectory = '', $logFilePrefix = 'log_', $logFileExtension = '.log') {
            $this->logDirectory = $logDirectory ?: __DIR__ . "/log/"; // Dossier de logs par défaut
            $this->logFilePrefix = $logFilePrefix;
            $this->logFileExtension = $logFileExtension;
            $this->logFilePath = $this->generateLogFilePath();
        }

        public function log($message, $level = 'DEBUG') {
            if (!isset($this->logLevels[$level])) {
                throw new Exception('Niveau de log invalide');
            }

            $this->checkLogFile();
            
            $logMessage = date('[Y-m-d H:i:s]') . ' ' . $this->logLevels[$level] . $message . $this->resetColor . PHP_EOL;
            file_put_contents($this->logFilePath, $logMessage, FILE_APPEND);
        }

        private function generateLogFilePath() {
            $date = date('Y-m-d');
            $fileName = $this->logFilePrefix . $date . $this->logFileExtension;
            return $this->logDirectory . $fileName;
        }

        private function checkLogFile() {
            $date = date('Y-m-d');
            $existingFilePath = $this->logDirectory . $this->logFilePrefix . $date . $this->logFileExtension;
            
            if ($this->logFilePath !== $existingFilePath) {
                $this->logFilePath = $existingFilePath;
            }
        }
    }


?>