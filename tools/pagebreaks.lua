-- pagebreaks.lua
-- Inserisce marcatori epub:type="pagebreak" a ogni heading di primo livello.
-- Kindle e Kobo usano questi marcatori per mostrare numeri di pagina reali
-- invece di posizioni/percentuali.

local page_num = 0

function Header(el)
  if el.level == 1 then
    page_num = page_num + 1
    local marker = pandoc.RawBlock(
      'html',
      string.format('<span epub:type="pagebreak" id="page-%d" aria-label="%d"/>', page_num, page_num)
    )
    return { marker, el }
  end
end
