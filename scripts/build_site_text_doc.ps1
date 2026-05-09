$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$jsonPath = Join-Path $root "site-text-inventory.json"
$docxPath = Join-Path $root "euroland-site-text-inventory.docx"

$data = Get-Content -LiteralPath $jsonPath -Raw | ConvertFrom-Json

$word = New-Object -ComObject Word.Application
$word.Visible = $false

try {
    $doc = $word.Documents.Add()
    $selection = $word.Selection

    $selection.Style = "Title"
    $selection.TypeText("Euroland IR Website Text Inventory")
    $selection.TypeParagraph()

    $selection.Style = "Normal"
    $selection.TypeText("Scope: site copy extracted from source pages.")
    $selection.TypeParagraph()
    $selection.TypeText("Exclusions: buttons, navbar items, sitemap, privacy policy, terms of use, cookies, and legal pages.")
    $selection.TypeParagraph()
    $selection.TypeText("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')")
    $selection.TypeParagraph()
    $selection.TypeParagraph()

    foreach ($page in $data.pages) {
        $selection.Style = "Heading 1"
        $selection.TypeText($page.page)
        $selection.TypeParagraph()

        $selection.Style = "Normal"
        foreach ($text in $page.strings) {
            $selection.Range.ListFormat.ApplyBulletDefault()
            $selection.TypeText([string]$text)
            $selection.TypeParagraph()
        }
        $selection.Range.ListFormat.RemoveNumbers()
        $selection.TypeParagraph()
    }

    $doc.SaveAs([ref]$docxPath, [ref]16)
    $doc.Close()
}
finally {
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
}

Write-Output $docxPath
