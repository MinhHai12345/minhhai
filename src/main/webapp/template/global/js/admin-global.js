/**
 * 
 */
$(document).ready(function() {
	enableOrDisableDeleteAll();
	autoCheckBoxChild();
	autoCheckBoxParent();
});

function enableOrDisableDeleteAll() {
	$('input[type=checkbox]').click(function() {
		if ($('input[type=checkbox]:checked').length > 0) {
			$('#btnDelete').prop('disabled', false);
		} else {
			$('#btnDelete').prop('disabled', true);
		}
	});
}

function autoCheckBoxChild() {
	$('#checkAll').change(function () {
		if ((this).checked) {
			$(this).closest('table').find('tbody').find('input[type=checkbox]').prop('checked', true);
		} else {
			$(this).closest('table').find('tbody').find('input[type=checkbox]').prop('checked', false);
			$('#btnDelete').prop('disabled', true);
		}
	});
}

function autoCheckBoxParent() {
	var totalCheckBoxChild = $('#checkAll').closest('table').find('tbody input[type=checkbox]').length;
	$('#checkAll').closest('table').find('tbody input[type=checkbox]').each(function() {
		$(this).on('change', function() {
			var totalCheckBoxChecked = $('#checkAll').closest('table').find('tbody input[type=checkbox]:checked').length;
			if (totalCheckBoxChild == totalCheckBoxChecked) {
				$('#checkAll').prop('checked', true);
			} else {
				$('#checkAll').prop('checked', false);
			}
		});
	});
}