import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { } from 'express';
import { filter } from 'rxjs';

@Component({
  selector: 'app-default',
  imports: [RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
  currentPageTitle: string = 'main page';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.url);
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
    this.updateTitle();
  }
  updateTitle() {
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    this.currentPageTitle = route.snapshot.data['title'] || 'Main Page';
  }

  eddMenu = {
    report: [
      { label: 'Stage 2a', link: 'stage-2a' },
      { label: 'Stage 3a VOA 1.2', link: 'stage-3a-voa' },
      { label: 'Stage 3a SVOA 1.2', link: 'stage-3a-svoa' },
      { label: 'Stage 3a Pesticide 1.2', link: 'stage-3a-pesticide' },
      { label: 'Stage 3a Aroclor 1.2', link: 'stage-3a-aroclor' },
      { label: 'SEDD Metals (CLP SOW)', link: 'sedd-metals' },
      { label: 'SEDD VOA (CLP SOW)', link: 'sedd-voa' },
      { label: 'SEDD SVOA (CLP SOW)', link: 'sedd-svoa' },
      { label: 'SEDD PCB (CLP SOW)', link: 'sedd-pcb' },
      { label: 'SEDD Pesticide Toxaphene (CLP SOW)', link: 'sedd-pesticide' }
    ],
    sedd: [
      { label: 'ADR Method Edit', link: 'adr-method-edit' },
      { label: 'Air conversation Table', link: 'air-conv-table' },
      { label: 'Air Conversation Table Crystal', link: 'air-conv-crystal' },
      { label: 'ADR EDD', link: 'ADRdefault' },
      { label: 'ADR SQL EDD', link: 'adr-sql-edd' },
      { label: 'ADR LIBRARY', link: 'adr-library' },
      { label: 'Arcadisedd', link: 'Arcadis' },
      { label: 'BEM Edd', link: 'bem-edd' },
      { label: 'BEM(.dbf Format)EDD', link: 'bem-dbf-edd' },
      { label: 'BROWN Coldwell EDD', link: 'brown-coldwell-edd' },
      { label: 'CH2M-HILL', link: 'ch2m-hill' },
      { label: 'CH2M-HILL FEB 11 Revision', link: 'ch2m-hill-feb11' },
      { label: 'CH2M-HILL Utility', link: 'ch2m-hill-util' },
      { label: 'CH2M-HILL SNEDD', link: 'ch2m-hill-snedd' },
      { label: 'CH2M-HILL SNEDD Utility', link: 'ch2m-hill-snedd-util' },
      { label: 'EZEDD', link: 'ezedd' },
      { label: 'ENVIRON', link: 'environ' },
      { label: 'ENVIRONdatanew', link: 'environdatanew' },
      { label: 'ENVIRON Data NEW SHAW', link: 'environ-data-shaw' },
      { label: 'EXCEL EDD NEW VERSION', link: 'excel-edd-new' },
      { label: 'EXCEL EDD ADVANCE', link: 'excel-edd-advance' },
      { label: 'Equis EDD', link: 'equis-edd' },
      { label: 'Equis EDD NEW (Date Formated)', link: 'equis-edd-new-date' },
      { label: 'Equis EDD NEW (Date Formated)(K&L)', link: 'equis-edd-new-kl' },
      { label: 'ERIS EDD', link: 'eris-edd' },
      { label: 'EAEST EDD', link: 'eaest-edd' },
      { label: 'Excel FLAT FILE EDD', link: 'excel-flat-file' },
      { label: 'Excel FLAT FILE HDR', link: 'excel-flat-file-hdr' },
      { label: 'ERPIMS NEW', link: 'erpims-new' },
      { label: 'ERPIMS NEW(sample wise)', link: 'erpims-new-sample' },
      { label: 'Excel Flat File EDD-RLMDL', link: 'excel-flat-file-rlmdl' },
      { label: 'EZ EDD-MapTech', link: 'ez-edd-maptech' },
      { label: 'EQ EDD', link: 'eq-edd' },
      { label: 'EQ LOD LOQ', link: 'eq-lod-loq' },
      { label: 'EPARESION2 M EDD', link: 'eparesion2-m-edd' },
      { label: 'EzEDD-EdgeWood', link: 'ezedd-edgewood' },
      { label: 'ECC EDD', link: 'ecc-edd' },
      { label: 'ECC EDD Modify', link: 'ecc-edd-modify' },
      { label: 'ECC EDD 10152014', link: 'ecc-edd-2014' },
      { label: 'Excel EDD', link: 'excel-edd' },
      { label: 'ERPIMS', link: 'erpims' },
      { label: 'Equis Edd', link: 'equis-edd-lowercase' },
      { label: 'GIS Key Edd', link: 'gis-key-edd' },
      { label: 'Honeywell EDD', link: 'honeywell-edd' },
      { label: 'HRP EDD', link: 'hrp-edd' },
      { label: 'JBMDL EDD', link: 'jbmdl-edd' },
      { label: 'LEA EDD', link: 'lea-edd' },
      { label: 'MWH EDD', link: 'mwh-edd' },
      { label: 'NJ Hazsite', link: 'nj-hazsite' },
      { label: 'NJ HazSite New', link: 'NJHazSiteNew' },
      { label: 'NYSDEC EDD', link: 'nysdec-edd' },
      { label: 'NYSDEC EDD With TestResultQc', link: 'nysdec-edd-qc' },
      { label: 'NYSDEC EDD V-3', link: 'nysdec-edd-v3' },
      { label: 'NYSDEC EDD V-4', link: 'nysdec-edd-v4' },
      { label: 'NPS GLRI', link: 'nps-glri' },
      { label: 'Persions', link: 'persions' },
      { label: 'Persions-DL', link: 'persions-dl' },
      { label: 'Raw Result Excel', link: 'raw-result-excel' },
      { label: 'Roux EDD', link: 'roux-edd' },
      { label: 'Request Hit Summary', link: 'request-hit-summary' },
      { label: 'Shaw View', link: 'shaw-view' },
      { label: 'Shaw view Revision 2010', link: 'shaw-view-2010' },
      { label: 'Scribe Edd', link: 'scribe-edd' },
      { label: 'Scribe Edd New', link: 'scribe-edd-new' },
      { label: 'Tullys Edd', link: 'tullys-edd' },
      { label: 'Con Edd', link: 'con-edd' }
    ],
    net: [
      { label: 'EDD Due', link: 'edd-due' },
      { label: 'Cover Page', link: 'cover-page' },
      { label: 'Cover Page with Hold Time', link: 'cover-page-hold' },
      { label: 'Delete Datafile - SSResults', link: 'delete-ssresults' },
      { label: 'Internal Chain Of Custody', link: 'int-coc' },
      { label: 'Internal Chain Of Custody - 1', link: 'int-coc-1' },
      { label: 'NewYork State Department', link: 'nys-dept' },
      { label: 'NewYork State Department(Crystal Report)', link: 'nys-dept-crystal' },
      { label: 'Check Data Transfer', link: 'check-data-transfer' },
      { label: 'Delete Data', link: 'delete-data' },
      { label: 'QC : Due Dates', link: 'qc-due-dates' },
      { label: 'Quote To ProjectPrice', link: 'quote-project-price' },
      { label: 'QCInfo', link: 'qc-info' },
      { label: 'Custom Params', link: 'custom-params' },
      { label: 'Plot Graph', link: 'plot-graph' },
      { label: 'Admin Plot Graph (NEW)', link: 'admin-plot-graph' },
      { label: 'Plot Graph-MD', link: 'plot-graph-md' },
      { label: 'Sequence Data Transfer', link: 'seq-data-transfer' },
      { label: 'Delete Sequence Data', link: 'delete-seq-data' },
      { label: 'NY Yearly Data', link: 'ny-yearly-data' },
      { label: 'TPH Entry In SSResults', link: 'tph-entry' },
      { label: 'Gases Entry In SSResults', link: 'gases-entry' },
      { label: 'Gases Entry In SSResults - NEW', link: 'gases-entry-new' },
      { label: 'Delete Datafile -FileInfo', link: 'delete-fileinfo' },
      { label: 'Temp Data', link: 'temp-data' },
      { label: 'Sequence Comparison', link: 'seq-comparison' },
      { label: 'Search SOPs', link: 'search-sops' },
      { label: 'Login : Data Transfer flag change', link: 'login-flag-change' },
      { label: 'QCSample Ssanumber Update', link: 'qc-ssanumber-update' },
      { label: 'Add Extra Tics in Form1', link: 'add-extra-tics' },
      { label: 'Export Extra Tics File', link: 'export-extra-tics' },
      { label: 'RT Window Form', link: 'rt-window' },
      { label: 'Label print for MD', link: 'label-print-md' },
      { label: 'Insert Record IN COC1', link: 'insert-coc1' },
      { label: 'Pharma Chem Report', link: 'pharma-report' },
      { label: 'EPA Project Track Report', link: 'epa-project-track' },
      { label: 'Upload EDD in CHEMTECH A', link: 'upload-edd-chemtech' },
      { label: 'Total And Dissolve Comparison', link: 'total-dissolve-comp' },
      { label: 'Total And TCLP Comparison', link: 'total-tclp-comp' },
      { label: 'EPA: Total And Dissolve Comparison', link: 'epa-total-dissolve' },
      { label: 'Annual DOC', link: 'annual-doc' },
      { label: 'ControlLimitData', link: 'control-limit-data' },
      { label: 'Update LOD/LOQ for HDR', link: 'update-lod-hdr' },
      { label: 'Delete Fileinfo By SequenceID - FileInfo', link: 'delete-fileinfo-seq' }
    ]
  };

}
