with import <nixpkgs> { };

let jekyll_env = bundlerEnv rec {
    name = "jekyll_env";
    gemdir  = ./.;
  };
in
  stdenv.mkDerivation rec {
    name = "jekyll_env";
    buildInputs = [ jekyll_env nodejs ];

    shellHook = ''
      exec ${jekyll_env}/bin/jekyll serve --watch
    '';
  }
