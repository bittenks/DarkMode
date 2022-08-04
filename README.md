# 🌓 Dark Mode

Adicionar DarkMode em sistemas Web

- Usando LocalStorage para guardar o seu modo favorito


## Como usar ❔

- Adicionar os arquivos (.css e .js) no seu projeto 


## Uso 💻

1. Adicionar no seu HTML da maneira que preferir, importando `DarkMode.js` script:


```html
  <script src="./js/DarkMode.js"></script>
  <div class="form-check form-switch">
      <input type="checkbox" onchange="ActiveDarkMode()" class="form-check-input" id="darkSwitch" />
      <label class="custom-control-label" for="darkSwitch">
        <img id="iconSwitch"src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png"> //imagem de icone
    </label>
    </div>
```

2. Edite o `DarkMode.css` para as suas necessidades.

## Como funciona 💡

Transformar em modo escuro vai adionar `data-theme="dark"` no `body` tag. Você pode utilizar o css para personalizar da maneira que preferir, como:

```css
[data-theme="dark"] {
  background-color: #111 !important;
  color: #eee;
}
```

## Créditos 💖

Inspirado em [dark-mode-switch](https://github.com/coliff/dark-mode-switch) 
