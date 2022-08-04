# 🌓 Dark Mode

Adicionar DarkMode em sistemas Web

- Usando LocalStorage para guardar o seu modo favorito


## Como usar ❔

- Adicionar os arquivos (.css e .js) no seu projeto 


## Uso 💻

1. Adicionar no seu HTLM da maneira que preferir, importando `DarkMode.js` script:

Bootstrap 4.x

```html
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="darkSwitch" />
  <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
</div>
<script src="dark-mode-switch.min.js"></script>
```

Bootstrap 5.x

```html
<div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" id="darkSwitch" />
  <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
</div>
<script src="dark-mode-switch.min.js"></script>
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
