<?php

    class FileIncluder {
        public static function includeFile($filePath) {
        $absolutePath = $filePath;
        
        if (file_exists($absolutePath)) {
            include($absolutePath);
            return true;
        } else {
            throw new Exception("File not found: $filePath");
            return false;
        }
        }
    }
    
    /*
        // Example usage
        try {
            FileIncluder::includeFile('path/to/your/file.php');
        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage();
        }
    */
    

?>