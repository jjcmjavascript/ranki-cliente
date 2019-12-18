<?php

namespace App\Traits;

// Para excel
use PHPExcel;
use PHPExcel_IOFactory;
use PHPExcel_Worksheet_PageSetup;
use PHPExcel_Worksheet;
use PHPExcel_Settings;
use PHPExcel_Style_Border;
use PHPExcel_Cell_DataType;
use PHPExcel_Worksheet_HeaderFooterDrawing;
use PHPExcel_Worksheet_HeaderFooter;


trait Funciones
{
    public function excel($data = array(), $columnas = array(), $titulo = "", $extension = 'xlsx',
        $cabecera_html = '', $orientacion = 'default', $size = 'A4', $attach = false, $multipage = false,
        $row_headers_in_array = false, $header = [], $footer = [], $font_size = 12)
    {
        // por norma los documentos no pueden tener títulos más largos de 31 caracteres
        $titulo = (strlen($titulo) > 31) ? substr($titulo, 0, 31) : $titulo;

        $formatos = array('csv' => 'CSV', 'xlsx' => 'Excel2007', 'xls' => 'Excel5', 'pdf' => 'PDF');
        $headers    = array(
            'csv'   => 'Content-Type: application/vnd.ms-excel',
            'xlsx'  => 'Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'xls'   => 'Content-Type: application/vnd.ms-excel',
            'pdf'   => 'Content-Type: application/pdf'
        );
        $paperOrientation = array(
            'portrait' => PHPExcel_Worksheet_PageSetup::ORIENTATION_PORTRAIT,
            'landscape' => PHPExcel_Worksheet_PageSetup::ORIENTATION_LANDSCAPE,
            'default' => PHPExcel_Worksheet_PageSetup::ORIENTATION_DEFAULT
        );
        $paperSize = array(
            'A4' => PHPExcel_Worksheet_PageSetup::PAPERSIZE_A4,
            'letter' => PHPExcel_Worksheet_PageSetup::PAPERSIZE_LETTER,
            'legal' => PHPExcel_Worksheet_PageSetup::PAPERSIZE_LEGAL
        );

        $imagePosition = array(
            'header' => [
                'left' => PHPExcel_Worksheet_HeaderFooter::IMAGE_HEADER_LEFT,
                'right' => PHPExcel_Worksheet_HeaderFooter::IMAGE_HEADER_RIGHT,
                'center' => PHPExcel_Worksheet_HeaderFooter::IMAGE_HEADER_CENTER,
            ],
            'footer' => [
                'left' => PHPExcel_Worksheet_HeaderFooter::IMAGE_FOOTER_LEFT,
                'right' => PHPExcel_Worksheet_HeaderFooter::IMAGE_FOOTER_RIGHT,
                'center' => PHPExcel_Worksheet_HeaderFooter::IMAGE_FOOTER_CENTER,
            ],
        );

        @ob_start();

        $objPHPExcel = new PHPExcel();
        $objPHPExcel->getProperties()
        ->setCreator("Cobanc")
        ->setLastModifiedBy("Cobanc")
        ->setTitle($titulo)
        ->setSubject("Cobanc")
        ->setDescription("Exportacion ".$formatos[$extension])
        ->setKeywords($formatos[$extension])
        ->setCategory("Cobanc");
        $objPHPExcel->getDefaultStyle()->getFont()->setSize($font_size);
        $colum = [];
        // SETEAR CABECERA (FILA 1)
        if(!$multipage) {
            if ($row_headers_in_array) {
                $columnas = array_keys((array)$data[0]);
            }

            $length_columnas = count($columnas);
            if ($length_columnas > 0) {
                $sheet = $objPHPExcel->setActiveSheetIndex(0);
                $objPHPExcel->getActiveSheet()->getStyle('1:1')->getFont()->setBold(true);

                foreach($columnas as $indice => $columna) {
                    $columna = !is_string($columna) && is_numeric($columna) ? number_format($columna, 0, '', '') : $columna;
                    $colum[]= $this->getColumnLetter($indice + 1).'1';
                    $sheet->setCellValueExplicit($this->getColumnLetter($indice + 1).'1', "$columna", PHPExcel_Cell_DataType::TYPE_STRING);
                    // $sheet->setCellValueByColumnAndRow($indice, 1, "$columna", PHPExcel_Cell_DataType::TYPE_STRING);
                }
            }
            else if ($row_headers_in_array) {
                $length_columnas = count((array)$data[0]);
                $header = array_keys((array)$data[0]);
                // dd($header);

                $sheet = $objPHPExcel->setActiveSheetIndex(0);
                $objPHPExcel->getActiveSheet()->getStyle('1:1')->getFont()->setBold(true);

                foreach ($header as $key => $value) {
                    $value = !is_string($value) && is_numeric($value) ? number_format($value, 0, '', '') : $value;
                    $sheet->setCellValueExplicit($this->getColumnLetter($key + 1).'1', "$value", PHPExcel_Cell_DataType::TYPE_STRING);
                    // $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($key, 1, "$value", PHPExcel_Cell_DataType::TYPE_STRING);
                    $objPHPExcel->getActiveSheet()->getColumnDimension($this->getColumnLetter($key + 1))
                        ->setAutoSize(true);
                }
                $to = $this->getColumnLetter($length_columnas).'1';
                $objPHPExcel->getActiveSheet()->getStyle("A1:$to")->getFont()->setBold(true);
            }
        }
        $row = [];

        foreach ($colum as $key => $value) {
            $row[] = $objPHPExcel->getActiveSheet()->getCell($value)->getValue();
        }

        $sheet = $objPHPExcel->getActiveSheet();
        if ($extension == 'pdf') {
            $sheet->getPageSetup()->setOrientation($paperOrientation[$orientacion]);
            $sheet->getPageSetup()->setPaperSize($paperSize[$size]);
            $sheet->getPageSetup()->setFitToWidth(700);
            $sheet->getPageSetup()->setFitToHeight(1);
        }

        // SETEAR CUERPO
        if(!$multipage) {
            // ESCRIBIR FILAS
            foreach ($data as $row_index => $row) {
                $row = (array)$row;
                if ($length_columnas > 0) {
                    $row_index = $row_index + 2;
                }
                else {
                    $row_index = $row_index + 1;
                }

                $tmp_column = 0;
                foreach ($row as $column_index => $field) {
                    if ($length_columnas > 0 && $column_index > ($length_columnas - 1)) {
                        $tmp_column = 0;
                        break;
                    }

                    $field = !is_string($field) && is_numeric($field) ? number_format($field, 0, '', '') : $field;
                    if ($field != '' && strpos($field, 'file:///') !== false) {
                        // para setear url relativa a la posición del archivo (misma altura de carpetas)
                        $field = str_replace('file:///', '', $field);

                        $objPHPExcel->getActiveSheet()
                        ->setCellValue($this->getColumnLetter($tmp_column + 1).($row_index + 1), $field);

                        $objPHPExcel->getActiveSheet()
                        ->getCell($this->getColumnLetter($tmp_column + 1).($row_index + 1))
                        ->getHyperlink()
                        ->setUrl($field);
                    }
                    else {
                        $sheet->setCellValueExplicit($this->getColumnLetter($tmp_column + 1).$row_index, "$field", PHPExcel_Cell_DataType::TYPE_STRING);
                        // $sheet->setCellValueByColumnAndRow($tmp_column, $row_index, "$field", PHPExcel_Cell_DataType::TYPE_STRING);
                        $sheet->getColumnDimension($this->getColumnLetter($tmp_column + 1))->setAutoSize(true);
                    }

                    $tmp_column++;
                }
            }

            $objPHPExcel->getActiveSheet()->setTitle($titulo);
            $objPHPExcel->getActiveSheet()->getPageSetup()->setOrientation($paperOrientation[$orientacion]);
            $objPHPExcel->getActiveSheet()->getPageSetup()->setPaperSize($paperSize[$size]);
            // SETEAR HEADER/FOOTER
            foreach (['header' => $header, 'footer' => $footer] as $type => $headerFooter) {
                if (count($headerFooter) > 0) {
                    $headerFooter = (object)$headerFooter;
                    foreach (['odd', 'even'] as $key => $oddEven) {
                        if (isset($headerFooter->$oddEven) && $headerFooter->$oddEven) {
                            $headerFooter->$oddEven = (object)($headerFooter->$oddEven);
                            if (isset($headerFooter->$oddEven->text) && $headerFooter->$oddEven->text) {
                                if ($oddEven == 'odd' && $type == 'header') {
                                    $objPHPExcel->getActiveSheet()->getHeaderFooter()
                                    ->setOddHeader($headerFooter->$oddEven->text);
                                }
                                else if ($oddEven == 'odd' && $type == 'footer') {
                                    $objPHPExcel->getActiveSheet()->getHeaderFooter()
                                    ->setOddFooter($headerFooter->$oddEven->text);
                                }
                                else if ($oddEven == 'even' && $type == 'header') {
                                    $objPHPExcel->getActiveSheet()->getHeaderFooter()
                                    ->setEvenHeader($headerFooter->$oddEven->text);
                                }
                                else if ($oddEven == 'even' && $type == 'footer') {
                                    $objPHPExcel->getActiveSheet()->getHeaderFooter()
                                    ->setEvenFooter($headerFooter->$oddEven->text);
                                }
                            }

                            // falta validar programación
                            if (isset($headerFooter->$oddEven->image) && $headerFooter->$oddEven->image) {
                                $headerFooter->$oddEven->image = (object)($headerFooter->$oddEven->image);
                                $objDrawing = new PHPExcel_Worksheet_HeaderFooterDrawing();
                                $objDrawing->setName($headerFooter->$oddEven->image->name);
                                $objDrawing->setPath($headerFooter->$oddEven->image->url);
                                $objDrawing->setHeight($headerFooter->$oddEven->image->height);
                                $objPHPExcel->getActiveSheet()->getHeaderFooter()->addImage(
                                    $objDrawing,
                                    $imagePosition[$type][$headerFooter->$oddEven->image->position]
                                );
                            }
                        }
                    }
                }
            }
        }
        else {
            foreach ($data as $page_index => $arreglo) {
                $arreglo = (array)$arreglo;
                $objPHPExcel->setActiveSheetIndex($page_index);
                $sheet = $objPHPExcel->getActiveSheet();

                if(count($columnas) == 0) {
                    $objPHPExcel->getActiveSheet()->setTitle('Hoja '.($page_index + 1));
                }
                else {
                    $objPHPExcel->getActiveSheet()->setTitle($columnas[$page_index]);
                }

                $length_columnas = count((array)$arreglo[0]);

                if ($row_headers_in_array) {
                    $header = array_keys((array)$arreglo[0]);
                    // dd($header);
                    foreach ($header as $key => $value) {
                        $value = !is_string($value) && is_numeric($value) ? number_format($value, 0, '', '') : $value;
                        $sheet->setCellValueExplicit($this->getColumnLetter($key + 1).'1', "$value", PHPExcel_Cell_DataType::TYPE_STRING);
                        // $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($key, 1, "$value", PHPExcel_Cell_DataType::TYPE_STRING);
                        $objPHPExcel->getActiveSheet()->getColumnDimension($this->getColumnLetter($key + 1))
                            ->setAutoSize(true);
                    }
                    $to = $this->getColumnLetter($length_columnas).'1';
                    $objPHPExcel->getActiveSheet()->getStyle("A1:$to")->getFont()->setBold(true);
                }

                foreach ($arreglo as $_row_index => $row) {
                    $row = (array)$row;
                    $row_index = $_row_index;
                    if ($row_headers_in_array) {
                        $row_index++;
                    }

                    $tmp_column = 0;
                    foreach ($row as $column_index => $field) {
                        if ($length_columnas > 0 && $column_index > ($length_columnas - 1)) {
                            $tmp_column = 0;
                            break;
                        }

                        $field = !is_string($field) && is_numeric($field) ? number_format($field, 0, '', '') : $field;
                        if ($field != '' && strpos($field, 'file:///') !== false) {
                            // para setear url relativa a la posición del archivo (misma altura de carpetas)
                            $field = str_replace('file:///', '', $field);

                            $objPHPExcel->getActiveSheet()
                            ->setCellValue($this->getColumnLetter($tmp_column + 1).($row_index + 1), $field);

                            $objPHPExcel->getActiveSheet()
                            ->getCell($this->getColumnLetter($tmp_column + 1).($row_index + 1))
                            ->getHyperlink()
                            ->setUrl($field);
                        }
                        else {
                            $sheet->setCellValueExplicit($this->getColumnLetter($tmp_column + 1).($row_index + 1), "$field", PHPExcel_Cell_DataType::TYPE_STRING);
                            // $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($tmp_column, ($row_index + 1), "$field", PHPExcel_Cell_DataType::TYPE_STRING);
                            $objPHPExcel->getActiveSheet()
                            ->getColumnDimension($this->getColumnLetter($tmp_column + 1))
                            ->setAutoSize(true);
                        }
                        $tmp_column++;
                    }
                }

                if(isset($data[$page_index + 1])) {
                    $objPHPExcel->createSheet();
                }
            }
        }

        $objPHPExcel->setActiveSheetIndex(0);
        $filename = $titulo.'.'.$extension;

        if ($extension == 'pdf'){
            PHPExcel_Settings::setPdfRenderer(PHPExcel_Settings::PDF_RENDERER_MPDF, base_path().'/vendor/mpdf/mpdf');

            $col = $this->getColumnLetter($tmp_column);
            $row = count($data);
            if(count($columnas) > 0) {
                $row++;
                $objPHPExcel->getActiveSheet()->getStyle('A1:'.$col.'1')->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THICK);
                $objPHPExcel->getActiveSheet()->getStyle('A2:'.$col.$row)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
            } else {
                $objPHPExcel->getActiveSheet()->getStyle('A1:'.$col.$row)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
            }
        }

        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, $formatos[$extension]);

        if ($extension == 'csv') { $objWriter->setDelimiter(';'); }
        if ($extension != 'pdf') { $cabecera_html = ""; }

        if ($extension == 'pdf') {
            $objWriter->save('php://output', $cabecera_html);
        }
        else {
            $objWriter->save('php://output');
        }

        if($attach) {
            $binary_data = @ob_get_contents();
            @ob_end_clean();
            return array('binary_data' => $binary_data, 'filename' => $filename);
        }
        else {
            header($headers[$extension]);
            header('Content-Disposition: attachment; filename="'.$filename.'"');
            header('Cache-Control: max-age=0');
            exit();
            @ob_end_clean();
        }
    }


}
